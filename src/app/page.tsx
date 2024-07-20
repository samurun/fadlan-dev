import Hero from '@/components/hero';
import LatestProjects from '@/components/latest-projects';
import SummarizeMonthActivities from '@/components/summarize-month-activities';
import { siteConfig } from '@/config/site';
import LatestPosts from '@/components/latest-posts';

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
  return (
    <div>
      <Hero />
      <LatestProjects />
      <LatestPosts />
      <SummarizeMonthActivities />
    </div>
  );
}
