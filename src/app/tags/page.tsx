import { Metadata } from 'next';
import { posts } from '#site/content';
import { Tag } from '@/components/tag';
import { getAllTags } from '@/services/getAllTags';
import { sortTagsByCount } from '@/services/sortTagsByCount';

export const metadata: Metadata = {
  title: 'Tags',
  description: "Topic I've written about",
};

export default async function TagsPage() {
  const tags = getAllTags(posts.filter((post) => post.published));
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className='mt-14'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1'>
          <h1 className='inline-block font-black text-3xl'>Tags</h1>
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {sortedTags?.map((tag) => (
          <Tag tag={tag} count={tags[tag]} key={tag} />
        ))}
      </div>
    </div>
  );
}
