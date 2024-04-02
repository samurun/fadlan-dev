import { Link1Icon, Link2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';

type Props = {
  url: string;
  name: string;
  image: string;
  description: string;
  stacks: string[];
};

const ProjectItem = ({ url, name, image, description, stacks }: Props) => {
  return (
    <article className='group hover:scale-105 transition-all'>
      <figure className='w-full aspect-[720/390] items-center rounded transition-all relative overflow-hidden p-4'>
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
        <ul className='flex gap-2 mt-2'>
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
