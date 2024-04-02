'use client';

import {
  HomeIcon,
  PersonIcon,
  ReaderIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { Icons } from './icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-background z-20'>
      <div className='container h-16 flex items-center justify-between'>
        <Link
          href='/'
          className='text-lg font-bold flex items-center space-x-2'
        >
          <Icons.logo className='h-6 w-6' />
          <span className='font-bold'>Fadlan.dev</span>
        </Link>
        <div className='flex items-center'>
          <Link
            href='/'
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <HomeIcon />
          </Link>
          <Link
            href='/projects'
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <RocketIcon />
          </Link>
          <Link
            href='/blog'
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <ReaderIcon />
          </Link>
          <Link
            href='/about'
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <PersonIcon />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
