import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import NowPlaying from './now-playing';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='pt-2 pb-14 border-t mt-11'>
      <div className='container'>
        <NowPlaying />
        <div className='flex justify-between'>
          <div className='text-muted-foreground'>
            <p>© 2024 Fadlan</p>
          </div>
          <div>
            <a
              href='mailto:fadlan.jehteerokee@gmail.com'
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'rounded-full'
              )}
            >
              <EnvelopeClosedIcon />
            </a>
            <a
              href='www.linkedin.com/in/fadlan-jehteerokee'
              target='_blank'
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'rounded-full'
              )}
            >
              <LinkedInLogoIcon />
            </a>
            <a
              href='https://github.com/fadlan-dev'
              target='_blank'
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'rounded-full'
              )}
            >
              <GitHubLogoIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
