import { headers } from 'next/headers';
import path from 'path';
import { IActivity } from '@/types';
import ActivityItem from '@/components/activity-item';
import QueryPagination from '@/components/query-pagination';
import { sortActivities } from '@/lib/utils';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

async function getActivities() {
  const headersList = headers();
  const pathname = headersList.get('x-forwarded-host') || '';
  const URL = path.join('http://', pathname, '/api/strava/activities');
  const res = await fetch(URL, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

type ActivitiesPageProps = {
  searchParams: {
    page?: string;
  };
};

export const metadata: Metadata = {
  title: 'Activities | Fadlan',
  description: 'Record everything – runs, hikes',
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

const POSTS_PER_PAGE = 10;

export default async function ActivitiesPage({
  searchParams,
}: ActivitiesPageProps) {
  const data = await getActivities();
  const curentPage = Number(searchParams.page) || 1;
  const totlaPages = Math.ceil(data.activities.length / POSTS_PER_PAGE);
  const sortedActivities = sortActivities(
    data.activities.filter((activity: IActivity) => activity.type !== 'Workout')
  );
  const displayActivities = sortedActivities.slice(
    POSTS_PER_PAGE * (curentPage - 1),
    POSTS_PER_PAGE * curentPage
  );

  return (
    <div className='pt-16'>
      <h1 className='text-3xl font-black'>Activities</h1>
      <p className='mt-2'>Record everything – runs, hikes</p>
      <hr className='mt-8' />
      {displayActivities.length > 0 ? (
        <ul className='flex flex-col gap-4 mt-8'>
          {displayActivities.map((activity: IActivity) => (
            <li key={activity.id}>
              <ActivityItem
                id={activity.id}
                name={activity.name}
                start_date={activity.start_date}
                distance={activity.distance}
                moving_time={activity.moving_time}
                chievement={activity.achievement_count}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>Nothing to see hare yeer</p>
        </div>
      )}
      <QueryPagination totalPages={totlaPages} className='justify-end mt-4' />
    </div>
  );
}
