'use client';
import { IActivity } from '@/types';
import { useQuery } from '@tanstack/react-query';
import ActivityItem from './activity-item';

type LasteActivityProps = {};

const LasteActivity = (props: LasteActivityProps) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['activities'],
    queryFn: () => fetch('/api/strava/activities').then((res) => res.json()),
  });

  if (isError) {
    return (
      <center>
        <h2 className='text-2xl font-black'>Woops! </h2>
        <p className='text-xl text-muted-foreground font-bold'>
          Last activity went wrong
        </p>
      </center>
    );
  }

  if (isPending) {
    return (
      <section className='py-28'>
        <h2 className='text-3xl font-black'>Last Activity</h2>
        <ul className='flex flex-col gap-4 mt-8'>
          {new Array(2).fill('').map((_, idx: number) => (
            <li key={idx}>
              <article className='p-4 rounded border '>
                <div className='flex items-center gap-2'>
                  <div className=' size-10 bg-secondary animate-pulse rounded-full' />
                  <div>
                    <p className='w-28 h-5  bg-secondary animate-pulse rounded' />
                    <p className='w-40 h-[18px]  bg-secondary animate-pulse rounded mt-2' />
                  </div>
                </div>
                <div className='grid grid-cols-3 mt-6'>
                  <div>
                    <p className='text-sm text-muted-foreground'>ระยะทาง</p>
                    <p className='w-20 h-[26px] bg-secondary animate-pulse rounded' />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>เพซเฉลี่ย</p>
                    <p className='w-20 h-[26px] bg-secondary animate-pulse rounded' />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>เวลา</p>
                    <p className='w-28 h-[26px] bg-secondary animate-pulse rounded' />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className='py-28'>
      <h2 className='text-3xl font-black'>Laste Activity</h2>
      {data.activities.length > 0 ? (
        <ul className='flex flex-col gap-4 mt-8'>
          {((data as any)?.activities as Array<IActivity>)
            ?.slice(0, 2)
            .map((activity: IActivity) => (
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
        <p>No yet Activity</p>
      )}
    </section>
  );
};

export default LasteActivity;
