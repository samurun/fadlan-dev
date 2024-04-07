'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { usePathname } from 'next/navigation';
import path from 'path';
import { FacebookIcon, FacebookShareButton } from 'react-share';

type ShareBlogProps = {
  className?: string;
};

const ShareBlog = ({ className }: ShareBlogProps) => {
  const pathname = usePathname();
  const URL = path.join(
    typeof window !== 'undefined' ? window.location.origin : '',
    pathname
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(URL)
      .then(() => setCopied(true))
      .catch((error) => console.error('Clipboard failed:', error));

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className={cn(className, 'flex gap-2')}>
      <FacebookShareButton
        url={URL}
        className='Demo__some-network__share-button'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <Button
        size='icon'
        className={cn(
          'rounded-full',
          copied && 'bg-green-500 hover:bg-green-600'
        )}
        variant='secondary'
        onClick={handleCopy}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  );
};

export default ShareBlog;
