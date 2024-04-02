import { posts } from '#site/content';
import PostItem from '@/components/post-item';
import { sortPosts } from '@/lib/utils';
import QueryPagination from '@/components/query-pagination';
import { Metadata } from 'next';

type Props = {
  searchParams: {
    page?: string;
  };
};

export const metadata: Metadata = {
  title: 'Blog | Fadlan',
  description: 'My ramblings on all things web dev.',
};

const POSTS_PER_PAGE = 5;

const page = async ({ searchParams }: Props) => {
  const curentPage = Number(searchParams.page) || 1;

  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totlaPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (curentPage - 1),
    POSTS_PER_PAGE * curentPage
  );

  return (
    <div className='pt-16'>
      <h1 className='text-3xl font-black'>Blog Posts</h1>
      <p className='mt-2'>My ramblings on all things web dev.</p>
      <hr className='mt-8' />
      {displayPosts?.length > 0 ? (
        <ul className='flex flex-col gap-6 mt-8'>
          {displayPosts.map((post: any) => (
            <li key={post?.title}>
              <PostItem
                slug={post?.slug}
                title={post?.title}
                date={post?.date}
                description={post.description}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className='my-10 text-center'>
          <p>Nothing to see here yet</p>
        </div>
      )}
      <QueryPagination totalPages={totlaPages} className='justify-end mt-4' />
    </div>
  );
};

export default page;
