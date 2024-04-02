import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='space-y-6 py-32'>
      <div className='container flex flex-col gap-4 text-center'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance'>
          Hello, I&apos;m Fadlan
        </h1>
        <p className='max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance'>
          Welcome to my blog template. Built using tailwind, shadcn, velite and
          Nextjs 14.
        </p>
        <div className='flex flex-col gap-4 justify-center sm:flex-row'>
          <Link
            href='/blog'
            className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
          >
            View my blog
          </Link>
          <Link
            href={String(process.env.NEXT_PUBLIC_GITHUB_URL)}
            target='_blank'
            rel='noreferrer'
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'w-full sm:w-fit'
            )}
          >
            <GitHubLogoIcon className='mr-2' />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
