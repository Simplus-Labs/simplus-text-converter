import CopyToClipboard from 'react-copy-to-clipboard';
import { cn } from '@/lib/utils';
import { Clipboard } from '@phosphor-icons/react';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

export interface ClipBoardSize {
  sm: string;
  base: string;
  lg: string;
}
const Sizes: ClipBoardSize = {
  sm: '18',
  base: '25',
  lg: '32',
};

export interface ClipBoardVariants {
  icon: string;
  button: string;
}
export interface ClipBoardProps {
  text: string;
  className?: string;
  size?: keyof ClipBoardSize;
  variant?: keyof ClipBoardVariants;
}

export default function CopyClipboard({
  text,
  className,
  size = 'base',
  variant = 'icon',
}: ClipBoardProps): JSX.Element {
  const classes = {
    conteiner: cn(className),
    clipBoardSize: Sizes[size],
  };

  const [copied, setCopied] = useState<boolean>(false);

  const icon = (): JSX.Element => {
    return <Clipboard size={classes.clipBoardSize}></Clipboard>;
  };

  const button = (): JSX.Element => {
    return (
      <Button className="w-fit flex gap-3">
        <Clipboard />
        Copy to ClipBoard
      </Button>
    );
  };

  const onClick = (): void => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        onClick();
      }}
    >
      <div className={classes.conteiner}>
        <TooltipProvider>
          <Tooltip open={copied}>
            <TooltipTrigger>{variant === 'button' ? button() : icon()}</TooltipTrigger>
            <TooltipContent>🎉 copied successfully</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </CopyToClipboard>
  );
}
