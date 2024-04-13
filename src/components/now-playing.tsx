'use client';

import { Icons } from './icons';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

interface NowPlayingProps {}

const NowPlaying = (props: NowPlayingProps) => {
  const { data } = useQuery({
    queryKey: ['now-playing'],
    queryFn: () => fetch('/api/spotify/now-playing').then((res) => res.json()),
  });

  return (
    <div className='flex flex-col gap-2 py-6 mb-12'>
      <div className='flex items-center gap-1'>
        <Icons.spotify className='size-6' />
        {data?.isPlaying ? (
          <p className='font-bold text-md'>Now playing</p>
        ) : (
          <p className='font-bold text-md text-muted-foreground'>Not playing</p>
        )}
      </div>

      {data?.isPlaying ? (
        <div className='w-fit flex gap-3 border p-3 rounded-lg'>
          <div className='w-11 aspect-square relative rounded overflow-hidden'>
            <Image
              src={data.albumImageUrl}
              width={44}
              height={44}
              alt={data.title}
            />
          </div>
          <div>
            <div className='flex items-center gap-1'>
              <Image width={14} height={14} src='/images/playing.gif' alt='' />
              <Link
                href={data.songUrl}
                target='_blank'
                className='font-bold hover:underline'
              >
                {data.title}
              </Link>
            </div>
            <p className='text-xs text-muted-foreground'>{data.artist}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NowPlaying;
