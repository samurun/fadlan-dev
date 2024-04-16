import getProjects from '@/services/getProjects';
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/constants/projects.json';
import path from 'path';
import ProjectItem from '@/components/project-item';
import { siteConfig } from '@/config/site';

type Props = {};

export const metadata = {
  title: 'Projects | Fadlan',
  description: 'Information about me',
  authors: { name: siteConfig.name },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'article',
    url: 'https://fadlan-dev.vercel.app/',
    images: [
      {
        url: `/api/og`,
        width: 1200,
        height: 672.1,
        alt: 'fadlan-dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`/api/og`],
  },
};

const page = async (props: Props) => {
  return (
    <div className='pt-16'>
      <h1 className='text-3xl font-black'>Projects</h1>
      <hr className='mt-8' />
      <ul className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {(projects as [])!.map((project: any) => (
          <li key={project.name}>
            <ProjectItem
              url={project.url}
              name={project.name}
              image={project.image}
              description={project.description}
              stacks={project.stacks}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
