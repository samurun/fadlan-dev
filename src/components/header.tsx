'use client';

import {
  HomeIcon,
  PersonIcon,
  ReaderIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { Button } from './ui/button';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-background z-20'>
      <div className='container h-16 flex items-center justify-between'>
        <Link href='/' className='text-lg font-bold'>
          Fadlan.dev
        </Link>
        <div className='flex items-center'>
          <Link href='/'>
            <Button variant='ghost' size='icon'>
              <HomeIcon />
            </Button>
          </Link>
          <Link href='/projects'>
            <Button variant='ghost' size='icon'>
              <RocketIcon />
            </Button>
          </Link>
          <Link href='/blog'>
            <Button variant='ghost' size='icon'>
              <ReaderIcon />
            </Button>
          </Link>
          <Link href='/about'>
            <Button variant='ghost' size='icon'>
              <PersonIcon />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
