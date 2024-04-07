import { Icons } from './icons';
import Link from 'next/link';
import {
  calculatePace,
  formatFullDate,
  metersToKilometers,
  secondsToTime,
} from '@/lib/utils';
import path from 'path';

type ActivityItemProps = {
  id: number;
  name: string;
  start_date: string;
  distance: number;
  moving_time: number;
  chievement: number;
};

const ActivityItem = ({
  id,
  name,
  start_date,
  distance,
  moving_time,
  chievement,
}: ActivityItemProps) => {
  return (
    <article className='p-4 rounded border hover:scale-105 transition-all'>
      <div className='flex items-center gap-2'>
        <div className='grid place-items-center size-10 rounded-full bg-[#fc5201]'>
          <Icons.run className=' size-4' />
        </div>
        <div className='flex-1'>
          <Link
            href={path.join('www.strava.com/activities/', String(id))}
            target='_blank'
            className='font-bold hover:underline'
          >
            {name}
          </Link>
          <p className='text-sm text-muted-foreground'>
            {formatFullDate(start_date)}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-4 mt-6'>
        <div>
          <p className='text-sm text-muted-foreground'>ระยะทาง</p>
          <p className='font-bold text-lg'>{metersToKilometers(distance)} km</p>
        </div>
        <div>
          <p className='text-sm text-muted-foreground'>เพซเฉลี่ย</p>
          <p className='font-bold text-lg'>
            {calculatePace(moving_time, distance)} /km
          </p>
        </div>
        <div>
          <p className='text-sm text-muted-foreground'>เวลา</p>
          <p className='font-bold text-lg'>{secondsToTime(moving_time)} </p>
        </div>
        <div>
          <p className='text-sm text-muted-foreground text-end'>Achievements</p>
          <p className='font-bold text-lg flex items-center justify-end gap-1'>
            <Icons.achievements />
            {chievement}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ActivityItem;
