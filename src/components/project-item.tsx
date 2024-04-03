import { Link2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { IProject } from '@/types';

interface Props extends IProject {}

const ProjectItem = ({ url, name, image, stacks }: Props) => {
  return (
    <article className='group hover:scale-105 transition-all'>
      <figure className='w-full aspect-[6/3.1] items-center rounded transition-all relative overflow-hidden p-4'>
        <Image
          className='object-cover transition-all blur-[1px] group-hover:blur-0'
          fill
          src={image}
          alt={name}
        />
      </figure>
      <div className='mt-2'>
        <Link
          href={url}
          target='_blank'
          className='flex items-center gap-1 w-fit text-lg font-bold hover:underline'
        >
          {name}
          <Link2Icon />
        </Link>
        <ul className='flex flex-wrap gap-2 mt-2'>
          {stacks?.map((stack) => (
            <li key={stack}>
              <Badge variant='secondary'>{stack}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectItem;
