import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import projects from '@/constants/projects.json';
import ProjectItem from './project-item';

type Props = {};

const PROJECTS_PER_PAGE = 2;

const LatestProjects = (props: Props) => {
  const lasteProjects = projects.slice(0, PROJECTS_PER_PAGE);
  return (
    <section className='py-24'>
      <Link href='/projects'>
        <h2 className='text-3xl font-black'>Latest Projects</h2>
      </Link>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
        {lasteProjects.map((project, idx: number) => (
          <li key={project.name}>
            <ProjectItem
              url={project.url}
              name={project.name}
              image={project.image}
              description={project.desc}
              stacks={project.stacks}
            />
          </li>
        ))}
      </ul>
      <Link href='/projects'>
        <Button variant='outline' className='mt-16'>
          View all projects <ArrowRightIcon className='ml-2' />
        </Button>
      </Link>
    </section>
  );
};

export default LatestProjects;
