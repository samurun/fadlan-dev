'use client';
import { Redis } from '@upstash/redis';
import { useQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';

type BlogViewCounterProps = {
  className?: string;
  slug: string;
};

const redis = new Redis({
  url: 'https://apn1-excited-weevil-34414.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

const BlogViewCounter = ({ className, slug }: BlogViewCounterProps) => {
  const { data } = useQuery({
    queryKey: ['blog-view', slug],
    queryFn: () =>
      fetch(`/api/blog/view?slug=${slug}`).then((res) => res.json()),
  });

  return <p className={cn(className)}>{data?.view || 0} views</p>;
};

export default BlogViewCounter;
