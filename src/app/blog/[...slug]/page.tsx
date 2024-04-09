import { posts } from '#site/content';
import { MDXContent } from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import '../../mdx.css';
import { Metadata } from 'next';
import { Tag } from '@/components/tag';
import { formatDate } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import Comments from '@/components/comments';
import ShareBlog from '@/components/share-blog';
import { Redis } from '@upstash/redis';
import { ReportView } from './view';

export const revalidate = 60;

type Props = {
  params: { slug: string[] };
};

const redis = Redis.fromEnv();

// or Dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);

  return {
    title: post?.title,
    description: post?.description,
    authors: { name: 'mando' },
    openGraph: {
      title: post?.title,
      description: post?.description,
      type: 'article',
      url: post?.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 672.1,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

async function getPostFromParams(params: Props['params']) {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

const page = async ({ params }: Props) => {
  const post = await getPostFromParams(params);
  const views =
    (await redis.get<number>(['pageviews', 'blogs', params.slug].join(':'))) ??
    0;

  if (!post || !post.published) {
    notFound();
  }
  return (
    <>
      <ReportView slug={post.slug} />
      <article className='pt-16 prose max-w-3xl dark:prose-invert'>
        <h1 className='text-4xl font-black mb-0'>{post.title}</h1>
        <div className='py-2 text-muted-foreground flex items-center gap-2'>
          <CalendarIcon />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <p className=' pl-2'>{views} views</p>
        </div>
        <div className='flex gap-2 mb-2'>
          {post.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        {post.description ? (
          <p className='text-xl text-muted-foreground mt-0'>
            {post.description}
          </p>
        ) : null}
        <hr className='my-4' />
        <MDXContent code={post.body} />
      </article>

      <ShareBlog className='mt-8' />

      <div className='mt-14'>
        <Comments />
      </div>
    </>
  );
};

export default page;
