import { posts } from '#site/content';
import { sortPosts } from '@/lib/utils';
import PostItem from './post-item';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

type Props = {};

const LatestPosts = async (props: Props) => {
  const lastePosts = sortPosts(posts.filter((post) => post.published)).slice(
    0,
    3
  );
  return (
    <section className='py-28'>
      <h2 className='text-3xl font-black'>Latest Posts</h2>
      <ul className='flex flex-col gap-4 mt-8'>
        {lastePosts.map((post) => (
          <li key={post.slug}>
            <PostItem
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
            />
          </li>
        ))}
      </ul>
      <Link href='/posts'>
        <Button variant='outline' className='mt-16'>
          View all blog <ArrowRightIcon className='ml-2' />
        </Button>
      </Link>
    </section>
  );
};

export default LatestPosts;
