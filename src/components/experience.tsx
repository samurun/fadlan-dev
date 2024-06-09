import { calculateDuration, cn, experienceFormatDate } from '@/lib/utils';
import React from 'react';
import { Badge } from './ui/badge';

type Props = {
  className?: string;
};

const EXPERIENCES = [
  {
    title: 'The Monk Studios',
    employment_type: 'Freelance',
    company_name: 'The Monk Studios',
    location: 'bangkok',
    location_type: 'remote',
    start_date: 'Mar 2024',
    end_date: null,
    desc: '',
    stacks: ['react', 'vite', 'nextjs', 'typescript', 'tailwindcss', 'leaflet'],
  },
  {
    title: 'Frontend Web Developer',
    employment_type: 'Contract',
    company_name: 'The Monk Studios',
    company_link: 'https://www.themonkstudio.com',
    location: 'bangkok',
    location_type: 'remote',
    start_date: 'Sep 2023',
    end_date: 'Feb 2024',
    desc: (
      <ul>
        <li>
          I developed a React website for a blockchain game, offering smooth
          user experiences and boosting player engagement. Additionally, I
          integrated wallet connection, character creation, and reward
          harvesting features, leveraging cutting-edge technologies.
        </li>
        <li>
          Developed a comprehensive in-game database management system using
          React and TypeScript, facilitating seamless asset control and economic
          monitoring.
        </li>
      </ul>
    ),
    stacks: ['react', 'vite', 'nextjs', 'typescript', 'tailwindcss', 'leaflet'],
  },
  {
    title: 'Frontend Web Developer',
    employment_type: 'full-time',
    company_name: 'Kathi Studio Co.,Ltd',
    company_link: 'https://kathistudio.co.th',
    location: 'bangkok',
    location_type: 'remote',
    start_date: 'Sep 2021',
    end_date: 'Sep 2023',
    desc: (
      <ul>
        <li>
          I built a React.js application with TypeScript to calculate your
          greenhouse gas emissions. It considers factors like household size,
          electricity use, commuting habits, and food choices. The app
          visualizes your footprint in a clear pie chart, and to empower action,
          it even allows you to offset emissions through carbon credit
          purchases.
        </li>
        <li>
          Developed user interfaces using React.js to ensure responsive and
          interactive web applications, while integrating Leaflet.js for
          displaying noise levels and markers, enhancing search functionality.
          Implemented multilingual support for English and Thai languages
        </li>
      </ul>
    ),
    stacks: [
      'react',
      'nextjs',
      'nuxt',
      'typescript',
      'tailwindcss',
      'recharts',
      'leaflet',
    ],
  },
  {
    title: 'Frontend Web Developer',
    employment_type: 'full-time',
    company_link: 'The Monk Studios',
    company_name: 'iSAAC TECH',
    location: 'bangkok',
    start_date: 'Jul 2019',
    end_date: 'Oct 2020',
    desc: (
      <ul>
        <li>
          Provide support for the implementation of E-commerce websites,
          including wireframing, front-end development, mobile application
          development, and user interface design with vue.js
        </li>
        <li>
          Built a powerful Content Management System (CMS) using React.js. This
          CMS allows for efficient media uploads and content management,
          ensuring seamless content display on any playback device (player).
        </li>
      </ul>
    ),
    stacks: ['react', 'vue', 'javascript'],
  },
  {
    title: 'UX UI',
    employment_type: 'internship',
    company_name: 'ZTRUS',
    company_link: 'https://www.ztrus.com/',
    location: 'bangkok',
    start_date: 'Jan 2019',
    end_date: 'Apr 2019',
    desc: '',
    stacks: ['adobe xd'],
  },
];

const Experience = ({ className }: Props) => {
  return (
    <div className={cn('space-y-6 border-l-2 border-dashed', className)}>
      {EXPERIENCES.map((exp) => (
        <div key={exp.company_name} className='relative w-full'>
          <div className='size-4 bg-muted-foreground absolute top-1 z-10 -ml-[0.55rem] rounded-full text-blue-500' />
          <div className='ml-6'>
            <a
              href={exp.company_link}
              target='_blank'
              className='text-lg font-bold'
            >
              {exp.title}
            </a>
            <p>
              <a
                href={exp.company_link}
                target='_blank'
                className='hover:underline'
              >
                {exp.company_name}
              </a>
              <span className='mx-1'>·</span>
              <span className='capitalize'>{exp.employment_type}</span>
            </p>
            <p className='text-sm text-muted-foreground'>
              <time>
                {experienceFormatDate(exp.start_date)} -{' '}
                {exp.end_date ? experienceFormatDate(exp.end_date) : 'Present'}
              </time>
              <span className='mx-1'>·</span>
              {calculateDuration(
                exp.start_date,
                exp.end_date ? exp.end_date : new Date().toString()
              )}
            </p>
            <p className='text-sm text-muted-foreground capitalize'>
              {exp.location} {exp.location_type ? '·' : null}{' '}
              {exp.location_type}
            </p>
            <article className='prose dark:prose-invert max-w-full'>
              {exp.desc}
            </article>
            <div className='flex gap-2 mt-2'>
              {exp.stacks?.map((stack) => (
                <Badge key={stack} variant='secondary'>
                  {stack}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
