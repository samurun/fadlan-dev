import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { Card, CardHeader } from './ui/card';
import {
  metersToKilometers,
  secondsToTime,
  summarizeCurrentMonthActivities,
} from '@/lib/utils';
import Link from 'next/link';

type Props = {};

const SummarizeMonthActivities = async (props: Props) => {
  const activity = await fetch(
    'https://www.fadl4n.com/api/strava/activities'
  ).then((res) => res.json());

  if (!activity) {
    return null;
  }

  const summarize = summarizeCurrentMonthActivities(activity.activities);

  return (
    <div>
      <h2 className='text-3xl font-black'>
        This {new Date().toLocaleDateString('default', { month: 'long' })}
      </h2>
      <Card className='mt-8'>
        <CardHeader>
          <div className='flex justify-between'>
            <div>
              <label className='text-muted-foreground'>Total Activities</label>
              <p className='font-bold text-xl'>{summarize.totalActivities}</p>
            </div>
            <div>
              <label className='text-muted-foreground'>Total Time</label>
              <p className='font-bold text-xl'>
                {secondsToTime(summarize.totalMovingTime)}
              </p>
            </div>
            <div>
              <label className='text-muted-foreground'>Total Distance</label>
              <p className='font-bold text-xl'>
                {metersToKilometers(summarize.totalDistance)} km
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Link href='/activities'>
        <Button variant='outline' className='mt-8'>
          View all activitiy <ArrowRightIcon className='ml-2' />
        </Button>
      </Link>
    </div>
  );
};

export default SummarizeMonthActivities;
