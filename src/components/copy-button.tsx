import React, { useState } from 'react';
import { Button } from './ui/button';

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
    <Button size='xs' variant='ghost' disabled={isCopied} onClick={copy}>
      {isCopied ? 'Copied!' : 'Copy'}
    </Button>
  );
};
