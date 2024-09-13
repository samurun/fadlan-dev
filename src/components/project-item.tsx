import { Link2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { IProject } from '@/types';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface Props extends IProject {}

const displayLimit = 4;

const ProjectItem = ({ url, name, image, stacks }: Props) => {
  return (
    <article className='group transition-all'>
      <figure className='w-full aspect-[6/3.1] items-center rounded transition-all relative overflow-hidden p-4'>
        <Image
          className='object-cover transition-all'
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
          {stacks?.slice(0, displayLimit).map((stack) => (
            <li key={stack}>
              <Badge variant='secondary'>{stack}</Badge>
            </li>
          ))}
          {stacks?.length > displayLimit ? (
            <li>
              <Popover>
                <PopoverTrigger asChild>
                  <Badge variant='outline' className=' border-dashed'>
                    +{stacks?.length - displayLimit}
                  </Badge>
                </PopoverTrigger>
                <PopoverContent className=' w-fit max-w-xs flex flex-wrap gap-2'>
                  {stacks?.splice(displayLimit).map((stack) => (
                    <Badge key={stack} variant='secondary'>
                      {stack}
                    </Badge>
                  ))}
                </PopoverContent>
              </Popover>
            </li>
          ) : null}
        </ul>
      </div>
    </article>
  );
};

export default ProjectItem;
