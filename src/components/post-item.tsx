import Link from 'next/link';
import { cn, formatDate } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { buttonVariants } from './ui/button';
import { Tag } from './tag';
import { Redis } from '@upstash/redis';

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
    <article className='p-4 border rounded-md'>
      <div>
        <h2 className='text-2xl font-bold'>
          <Link href={'/' + slug}>{title}</Link>
        </h2>
      </div>
      <div className='flex gap-2 py-1'>
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className='max-w-none text-muted-foreground'>
        <p>{description}</p>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-sm sm:text-base flex items-center gap-2 font-medium'>
            <CalendarIcon />
            <time dateTime={date}>{formatDate(date)}</time>
            <span className='px-px sm:px-1'>•</span>
            <p>{viewsCount} views</p>
          </dd>
        </dl>
        <Link
          href={'/' + slug}
          className={cn(buttonVariants({ variant: 'link' }))}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
