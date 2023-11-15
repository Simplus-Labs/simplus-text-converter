import { cn } from '@/lib/utils';
import CopyClipboard from './ui/CopyClipboard';

interface ResultProps {
  /**
   * Text converted
   */
  text: string;
  /**
   * Format of the text
   */
  format: string;
}

/**
 * component objective
 */
function Result({ text, format }: ResultProps): JSX.Element {
  const classes = {
    container: cn('flex justify-center', 'relative w-[90vw] mx-auto max-w-2xl mt-10 '),
    header: cn(
      'absolute px-2 py-1 mx-auto -translate-y-2/4',
      'text-xs font-semibold text-white bg-primary',
      'rounded-xl bg-navy-blue-12',
    ),
    content: cn('flex flex-col gap-5 w-full p-10', 'border border-navy-blue-6', 'overflow-hidden rounded-xl shadow-sm'),
    copyCliboardIcon: cn('absolute right-5 top-5'),
    text: cn('break-words'),
  };

  return (
    <div className={classes.container}>
      <p className={classes.header}>Text formated to {format}</p>
      <div className={classes.content}>
        <CopyClipboard text={text} className={classes.copyCliboardIcon} />
        <p className={classes.text}>{text}</p>
        <CopyClipboard text={text} variant="button" />
      </div>
    </div>
  );
}

export default Result;
