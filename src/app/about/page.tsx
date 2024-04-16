import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: 'About | Fadlan',
  description: 'Information about me',
};

const page = (props: Props) => {
  return (
    <div className='mt-16'>
      <h1 className='text-3xl font-black'>👋 Hi, how are you?</h1>
      <article className='prose dark:prose-invert mt-10 flex gap-3 flex-col'>
        <p>
          I&rsquo;m Fadlan, an experienced Front-end web development with a
          strong passion for crafting customer-centric tech solutions.
        </p>
        <p>
          My expertise lies in working with various technologies, including
          React (TypeScript, Next.js) Throughout my career, I have honed skills
          in developing tech products that delight users and drive business
          success.
        </p>
        <p>
          If you&rsquo;re looking for a Front End Developer who is passionate
          about staying up-to-date with the latest technologies and trends,
          let&rsquo;s connect! 🤝
        </p>
        <blockquote>
          Feel free to reach out to discuss how my skills and experience can
          contribute to your team&rsquo;s success.
        </blockquote>
      </article>
      <div className='mt-10 flex gap-4'>
        {[
          {
            title: 'Github',
            url: process.env.NEXT_PUBLIC_GITHUB_URL || '',
            icon: <GitHubLogoIcon width={24} height={24} />,
          },
          {
            title: 'LinkedIn',
            url: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
            icon: <LinkedInLogoIcon width={24} height={24} />,
          },
          {
            title: 'Email',
            url: process.env.NEXT_PUBLIC_EMAIL || '',
            icon: <EnvelopeClosedIcon width={24} height={24} />,
          },
        ].map((c) => (
          <Tooltip key={c.title}>
            <TooltipTrigger>
              <Link href={c.url} target='_blank'>
                {c.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{c.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default page;
