'use client';

import { INowPlaying } from '@/types';
import { useEffect, useState } from 'react';
import { Icons } from './icons';
import Image from 'next/image';
import Link from 'next/link';

interface NowPlayingProps {}

const NowPlaying = (props: NowPlayingProps) => {
  const [nowPlaying, setNowPlaying] = useState<INowPlaying | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/now-playing', { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNowPlaying(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col gap-2 py-6 mb-12'>
      <div className='flex items-center gap-1'>
        <Icons.spotify className='size-8' />
        {nowPlaying?.isPlaying ? (
          <p className='font-bold'>Now playing</p>
        ) : (
          <p className='text-muted-foreground'>Not playing</p>
        )}
        — <p className='text-sm text-muted-foreground'>Spotify</p>
      </div>

      {nowPlaying?.isPlaying ? (
        <div className='w-fit flex gap-3 border p-3 rounded-md'>
          <div className='w-11 aspect-square relative rounded overflow-hidden'>
            <Image
              src={nowPlaying.albumImageUrl}
              width={44}
              height={44}
              alt={nowPlaying.title}
            />
          </div>
          <div>
            <Link
              href={nowPlaying.songUrl}
              target='_blank'
              className='font-bold hover:underline'
            >
              {nowPlaying.title}
            </Link>
            <p className='text-sm text-muted-foreground'>{nowPlaying.artist}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NowPlaying;
