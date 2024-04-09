import { Redis } from '@upstash/redis';
import { NextRequest } from 'next/server';

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  if (req.headers.get('Content-Type') !== 'application/json') {
    return Response.json({ status: 400, message: 'must be json' });
  }

  const body = await req.json();
  let slug: string | undefined = undefined;
  if ('slug' in body) {
    slug = body.slug;
  }

  if (!slug) {
    return Response.json({ status: 400, nessage: 'Slug not found' });
  }

  const ip = req.ip;

  if (ip) {
    // Hash the IP in order to not store it directly in your db.
    const buf = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(ip)
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    // deduplicate the ip for each slug
    const isNew = await redis.set(['deduplicate', hash, slug].join(':'), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });

    if (!isNew) {
      Response.json({ status: 202, message: 'readed' });
    }
  }

  await redis.incr(['pageviews', 'blogs', slug].join(':'));
  return Response.json({ status: 202 });
}
