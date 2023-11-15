import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Textarea } from './ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ConverterFunctions } from '@/services/fuctionNames';
import type { ConverterFunctionName } from '@/services/fuctionNames';
import { useState } from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import Result from './Result';

export interface ToolProps {
  /**
   * Specify an optional className to be added to the component
   */
  className?: string;
}

/**
 * component objective
 */
export default function Tool({ className }: ToolProps): JSX.Element {
  const classes = {
    container: cn('flex flex-col', className),
    content: cn('flex items-center justify-between', 'max-md:flex-wrap max-md:flex-col max-md:gap-5', 'mb-5'),
    textArea: cn('w-full md:w-1/2'),
    text: cn('max-md:hidden', 'px-10'),
    popoverContainer: cn('w-full md:w-1/2'),
  };

  const [fuctionSelect, setFuctionSelect] = useState<string>('');
  const [textToConvert, setTextToConvert] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [textConverted, setTextConverted] = useState<string>('');
  const values = Object.keys(ConverterFunctions);

  const onTextAreaChange = (e: string): void => {
    setTextToConvert(e);
    if (fuctionSelect !== '') {
      onSelect(fuctionSelect as ConverterFunctionName, e);
    }
  };
  const onSelect = (selectedFunction: ConverterFunctionName, textToConvertX: string): void => {
    const inputValue = textToConvertX;
    const result = ConverterFunctions[selectedFunction](inputValue);
    setFuctionSelect(selectedFunction);
    setTextConverted(result);
    setOpen(false);
  };

  /** Renders */
  const commandItems = values.map((value: string): JSX.Element => {
    return (
      <CommandItem
        key={value}
        value={value}
        onSelect={(e) => {
          onSelect(e as ConverterFunctionName, textToConvert);
        }}
      >
        {value}
      </CommandItem>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Textarea
          className={classes.textArea}
          onChange={(e) => {
            onTextAreaChange(e.target.value);
          }}
          placeholder="write your text here ..."
        ></Textarea>
        <p className={classes.text}>To</p>
        <div className={classes.popoverContainer}>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" aria-expanded={open} className="w-full justify-between">
                {fuctionSelect === '' ? 'Select Format' : fuctionSelect}
                {open ? <CaretDown /> : <CaretUp />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="">
              <Command>
                <CommandInput placeholder="Search format..." className="h-9" />
                <CommandEmpty>No format found.</CommandEmpty>
                <CommandGroup>{commandItems}</CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {fuctionSelect === '' ? (
        ''
      ) : textToConvert === '' ? (
        ''
      ) : (
        <Result format={fuctionSelect} text={textConverted}></Result>
      )}
    </div>
  );
}
