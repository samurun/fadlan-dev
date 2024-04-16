import { posts } from '#site/content';
import Hero from '@/components/hero';
import LasteActivity from '@/components/laste-activity';
import PostItem from '@/components/post-item';
import ProjectsSection from '@/components/projects-section';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { sortPosts } from '@/lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    authors: { name: siteConfig.name },
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      type: 'article',
      url: 'https://fadlan-dev.vercel.app/',
      images: [
        {
          url: `/api/og`,
          width: 1200,
          height: 672.1,
          alt: 'fadlan-dev',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`/api/og`],
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
