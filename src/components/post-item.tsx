import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { CalendarIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Tag } from './tag';
import { Redis } from '@upstash/redis';
import path from 'path';

const redis = Redis.fromEnv();

type Props = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
};

const PostItem = async ({ slug, title, description, date, tags }: Props) => {
  const splitSlugAsParams = slug.split('posts/')[1];

  const viewsCount =
    (await redis.get<number>(
      ['blogviews', 'blogs', splitSlugAsParams].join(':')
    )) ?? 0;
  return (
    <div className='group relative overflow-hidden rounded-lg bg-background border'>
      <Link
        href={path.join('/', slug)}
        className='absolute inset-0 z-10'
        prefetch={false}
      >
        <span className='sr-only'>Read more</span>
      </Link>
      <div className='p-4 md:p-6'>
        <div className='mb-2 flex items-center gap-2 text-xs text-muted-foreground'>
          <div className='flex items-center gap-1'>
            <CalendarIcon className='h-4 w-4' />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div className='flex items-center gap-1'>
            <EyeOpenIcon className='h-4 w-4' />
            <span>{viewsCount} views</span>
          </div>
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <h3 className='mb-2 text-lg font-bold group-hover:text-primary'>
          {title}
        </h3>
        <p className='text-sm text-muted-foreground line-clamp-3'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PostItem;
