import { calculateDuration, cn, experienceFormatDate } from '@/lib/utils';
import React from 'react';
import { Badge } from './ui/badge';

type Props = {
  className?: string;
};

const EXPERIENCES = [
  {
    title: 'Frontend Web Developer',
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
                <Badge key={stack} variant='secondary'>{stack}</Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* <div className='relative w-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500'
        >
          <path
            fill-rule='evenodd'
            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
            clip-rule='evenodd'
          />
        </svg>
        <div className='ml-6'>
          <h4 className='font-bold text-blue-500'>Frontend Development.</h4>
          <p className='mt-2 max-w-screen-sm text-sm text-gray-500'>
            Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis ante.
          </p>
          <span className='mt-1 block text-sm font-semibold text-blue-500'>
            2007
          </span>
        </div>
      </div>
      <div className='relative w-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500'
        >
          <path
            fill-rule='evenodd'
            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
            clip-rule='evenodd'
          />
        </svg>
        <div className='ml-6'>
          <h4 className='font-bold text-blue-500'>Graphic Design.</h4>
          <p className='mt-2 max-w-screen-sm text-sm text-gray-500'>
            Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
            iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis
            risus, eu pulvinar dolor.
          </p>
          <span className='mt-1 block text-sm font-semibold text-blue-500'>
            2007
          </span>
        </div>
      </div>
      <div className='relative w-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500'
        >
          <path
            fill-rule='evenodd'
            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
            clip-rule='evenodd'
          />
        </svg>
        <div className='ml-6'>
          <h4 className='font-bold text-blue-500'>Lead Ui/Ux Designer.</h4>
          <p className='mt-2 max-w-screen-sm text-sm text-gray-500'>
            Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
            iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis
            risus, eu pulvinar dolor
          </p>
          <span className='mt-1 block text-sm font-semibold text-blue-500'>
            2007
          </span>
        </div>
      </div>
      <div className='relative w-full'>
        <div className=' size-4 bg-secondary-foreground absolute -top-0.5 z-10 -ml-[0.55rem] rounded-full text-blue-500' />
        <div className='ml-6'>
          <h4 className='font-bold'>Lead Ui/Ux Designer.</h4>
          <p className='mt-2 max-w-screen-sm text-sm text-gray-500'>
            Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
            iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis
            risus, eu pulvinar dolor
          </p>
          <span className='mt-1 block text-sm font-semibold text-blue-500'>
            2007
          </span>
        </div>
      </div> */}
    </div>
    // <ul className={cn('relative border-s', className)}>
    //   {EXPERIENCES.map((exp) => (
    //     <li key={exp.company_name} className='mb-10 ms-4'>
    //       <div className='absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-muted-foreground' />
    //       <time className='mb-1 text-sm font-normal leading-none text-muted-foreground'>
    //         {experienceFormatDate(exp.start_date)} -{' '}
    //         {exp.end_date ? experienceFormatDate(exp.end_date) : 'Present'} ·{' '}
    //         <span className='lowercase'>
    //           {calculateDuration(
    //             exp.start_date,
    //             exp.end_date ? exp.end_date : new Date().toString()
    //           )}
    //         </span>
    //       </time>
    //       <h3 className='text-lg font-bold'>{exp.title}</h3>
    //       <p>
    //         <a
    //           href={exp.company_link}
    //           target='_blank'
    //           className='hover:underline'
    //         >
    //           {exp.company_name}
    //         </a>
    //         <span className='mx-1'>·</span>
    //         <span className='capitalize'>{exp.employment_type}</span>
    //       </p>
    //       <article className='prose dark:prose-invert max-w-full'>
    //         {exp.desc}
    //       </article>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Experience;
