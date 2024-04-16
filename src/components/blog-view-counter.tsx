'use server';
import { Redis } from '@upstash/redis';
import { cn } from '@/lib/utils';

type BlogViewCounterProps = {
  className?: string;
  slug: string;
};

const redis = new Redis({
  url: 'https://apn1-excited-weevil-34414.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

const BlogViewCounter = async ({ className, slug }: BlogViewCounterProps) => {
  const viewsCount =
    (await redis.get<number>(['blogviews', 'blogs', slug].join(':'))) ?? 0;

  return <p className={cn(className)}>{viewsCount} views</p>;
};

export default BlogViewCounter;
