import { posts } from '#site/content';
import Hero from '@/components/hero';
import LasteActivity from '@/components/laste-activity';
import PostItem from '@/components/post-item';
import ProjectsSection from '@/components/projects-section';
import { Button } from '@/components/ui/button';
import { sortPosts } from '@/lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export async function generateMetadata() {
  const ogSearchParams = new URLSearchParams();

  const title = 'Fadlan';
  const description =
    'Welcome to my blog template. Built using tailwind, shadcn, velite and Nextjs 14.';
  return {
    title: title,
    description: description,
    authors: { name: title },
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      url: 'https://fadlan-dev.vercel.app/',
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: 'fadlan-dev',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export default function Home() {
  const lastePosts = sortPosts(posts.filter((post) => post.published)).slice(
    0,
    3
  );
  return (
    <div>
      <Hero />
      <ProjectsSection />
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
        <Link href='/blog'>
          <Button variant='outline' className='mt-16'>
            View all blog <ArrowRightIcon className='ml-2' />
          </Button>
        </Link>
      </section>
      <LasteActivity />
    </div>
  );
}
