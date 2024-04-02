import { posts } from '#site/content';
import Hero from '@/components/hero';
import PostItem from '@/components/post-item';
import ProjectsSection from '@/components/projects-section';
import { sortPosts } from '@/lib/utils';

export const metadata = {
  title: 'Fadlan Jehteerokee',
};

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
        <h2 className='text-3xl font-black'>Laste Posts</h2>
        <ul className='flex flex-col gap-4 mt-8'>
          {lastePosts.map((post) => (
            <li key={post.slug}>
              <PostItem
                slug={post.slug}
                title={post.title}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
