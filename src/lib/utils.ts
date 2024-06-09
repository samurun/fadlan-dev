import { Post } from '#site/content';
import { IActivity } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (input: string | number): string => {
  const date = new Date(input);
  return date.toLocaleDateString('th-TH', {
    timeZone: 'Asia/Bangkok',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const formatFullDate = (input: string | number): string => {
  const date = new Date(input);
  const formattedDate = date.toLocaleDateString('th-TH', {
    timeZone: 'Asia/Bangkok',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('th-TH', {
    hour: 'numeric',
    minute: 'numeric',
  });
  return `${formattedDate} at ${formattedTime}`;
};

export const experienceFormatDate = (input: string | number): string => {
  const date = new Date(input);
  const formattedDate = date.toLocaleDateString('en-EN', {
    timeZone: 'Asia/Bangkok',
    month: 'short',
    year: 'numeric',
  });

  return formattedDate;
};

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function sortActivities(actitivies: Array<IActivity>) {
  return actitivies.sort((a, b) => {
    if (a.start_date > b.start_date) return -1;
    if (a.start_date < b.start_date) return 1;
    return 0;
  });
}

export function metersToKilometers(meters: number): number | string {
  const kilometers: number = meters / 1000;
  return Number(kilometers.toFixed(1));
}

export function secondsToTime(seconds: number): string {
  const hours: number = Math.floor(seconds / 3600);
  const minutes: number = Math.floor((seconds % 3600) / 60);
  const remainingSeconds: number = seconds % 60;

  if (hours < 1) {
    const formattedMinutes: string = minutes.toString();
    const formattedSeconds: string = remainingSeconds.toString();
    return `${formattedMinutes}m ${formattedSeconds}s`;
  } else {
    const formattedHours: string = hours.toString();
    const formattedMinutes: string = minutes.toString();
    return `${formattedHours}h ${+formattedMinutes}m`;
  }
}

export function calculatePace(
  movingTimeSeconds: number,
  distanceMeters: number
): string {
  const movingTimeMinutes: number = movingTimeSeconds / 60; // Convert seconds to minutes
  const distanceKm: number = distanceMeters / 1000; // Convert meters to kilometers
  const paceMinutesPerKm: number = movingTimeMinutes / distanceKm;
  const paceMinutes: number = Math.floor(paceMinutesPerKm);
  const paceSeconds: number = Math.round((paceMinutesPerKm - paceMinutes) * 60);

  return `${paceMinutes}:${String(paceSeconds).padStart(2, '0')}`;
}

export const calculateDuration = (
  startDate: string | number,
  endDate: string | number
): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const monthsDiff =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const years = Math.floor(monthsDiff / 12);
  const remainingMonths = monthsDiff % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years} yr ${remainingMonths} mos`;
  } else if (years > 0) {
    return `${years} yr`;
  } else {
    return `${monthsDiff} mos`;
  }
};

export function summarizeCurrentMonthActivities(activities: IActivity[]): {
  totalActivities: number;
  totalDistance: number;
  totalMovingTime: number;
} {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let totalDistance = 0;
  let totalMovingTime = 0;
  let totalActivities = 0;

  for (const activity of activities) {
    const activityDate = new Date(activity.start_date);

    if (
      activityDate.getMonth() === currentMonth &&
      activityDate.getFullYear() === currentYear
    ) {
      totalDistance += activity.distance;
      totalMovingTime += activity.moving_time;
      totalActivities += 1;
    }
  }

  return { totalActivities, totalDistance, totalMovingTime };
}
