'use client';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Icons } from './icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';

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
  };

  return (
    <div className={cn(className, 'flex gap-2')}>
      <Link
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'icon' }),
          'rounded-full'
        )}
        href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
        target='_blank'
      >
        <Icons.facebook />
      </Link>
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
