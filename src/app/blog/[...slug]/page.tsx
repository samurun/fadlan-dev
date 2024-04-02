import { posts } from '#site/content';
import { MDXContent } from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import '../../mdx.css';
import { Metadata } from 'next';
import { Tag } from '@/components/tag';
import { formatDate } from '@/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';

type Props = {
  params: { slug: string[] };
};

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
          height: 630,
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

  if (!post || !post.published) {
    notFound();
  }
  return (
    <article className='pt-16 prose max-w-3xl dark:prose-invert'>
      {/* <h1 className='text-3xl font-black mb-0'>{post.title}</h1> */}
      <h1 className='text-3xl font-black mb-0'>{post.description}</h1>
      <div className='py-2 text-muted-foreground'>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <div className='flex gap-2 mb-2'>
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {/* {post.description ? (
        <p className='text-xl text-muted-foreground mt-0'>{post.description}</p>
      ) : null} */}
      <hr className='my-4' />
      <MDXContent code={post.body} />
    </article>
  );
};

export default page;
