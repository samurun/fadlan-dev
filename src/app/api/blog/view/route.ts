import { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  const viewsCount =
    (await redis.get<number>(['blogviews', 'blogs', slug].join(':'))) ?? 0;
  return Response.json({ status: 202, view: viewsCount });
}
