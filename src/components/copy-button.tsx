import React, { useState } from 'react';
import { Button } from './ui/button';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  text: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Error copying text:', error);
    }
  };

  return (
    <Button
      size='icon'
      variant='ghost'
      className={cn(
        ' size-6 hover:bg-green-500 hover:text-primary-foreground invisible group-hover:visible',
        isCopied &&
          'bg-green-500 hover:bg-green-500 text-primary-foreground visible'
      )}
      onClick={copy}
    >
      {isCopied ? (
        <CheckIcon className=' size-3' />
      ) : (
        <CopyIcon className='size-3' />
      )}
    </Button>
  );
};
