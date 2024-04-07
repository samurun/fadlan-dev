'use client';
import { cn, metersToKilometers, secondsToTime } from '@/lib/utils';
import { IAthleteStats } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type AthleteStatsActivitiesProps = {
  className?: string;
};

const AthleteStatsActivities = ({ className }: AthleteStatsActivitiesProps) => {
  const { data: stats } = useQuery<IAthleteStats>({
    queryKey: ['athlete-stats'],
    queryFn: () => fetch('/api/strava/stats').then((res) => res.json()),
  });

  return (
    <div className={cn(className)}>
      <h2 className='text-3xl font-black'>Athlete Stats</h2>
      <div className={cn('p-4 rounded border mt-8')}>
        <h2 className='text-lg font-black'>{new Date().getFullYear()}</h2>
        <hr className='my-4' />
        <div className='grid grid-cols-3'>
          <div className='flex flex-col'>
            <p className='text-muted-foreground text-sm'>
              Activities ({stats?.all_run_totals.count || 0})
            </p>
            <span className='font-bold text-lg'>
              {stats?.ytd_run_totals?.count || 0}
            </span>
          </div>
          <div className='flex flex-col'>
            <p className='text-muted-foreground text-sm'>
              Distance (
              {metersToKilometers(stats?.all_run_totals.distance || 0)} km)
            </p>
            <p className='font-bold text-lg'>
              {metersToKilometers(stats?.ytd_run_totals?.distance || 0)} km
            </p>
          </div>
          <div className='flex flex-col'>
            <p className='text-muted-foreground text-sm'>
              Time ({secondsToTime(stats?.all_run_totals.moving_time || 0)})
            </p>
            <p className='font-bold text-lg'>
              {secondsToTime(stats?.ytd_run_totals?.moving_time || 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteStatsActivities;
