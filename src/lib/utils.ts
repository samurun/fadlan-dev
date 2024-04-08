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
    hour12: true,
  });
  return `${formattedDate} at ${formattedTime}`;
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
