'use client';

import Link from 'next/link';
import ThemeToggle from './theme-toggle';

import { Icons } from './icons';

type Props = {};

const MENU_ITEMS = [
  {
    key: 'projects',
    label: 'Project',
  },
  {
    key: 'posts',
    label: 'Blog',
  },
  {
    key: 'about',
    label: 'About',
  },
];

const Header = (props: Props) => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-background z-20 border-b'>
      <div className='container h-16 flex items-center justify-between'>
        <Link
          href='/'
          className='text-lg font-bold flex items-center space-x-2'
        >
          <Icons.logo className='h-6 w-6' />
          <span className='font-bold'>Fadl4n</span>
        </Link>
        <div className='flex items-center gap-2'>
          {MENU_ITEMS.map((menu) => (
            <Link
              href={menu.key}
              className='text-muted-foreground transition-colors hover:text-foreground text-sm'
            >
              {menu.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
