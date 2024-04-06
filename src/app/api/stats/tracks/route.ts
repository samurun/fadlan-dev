import { topTracks } from '@/lib/spotify';

interface TrackInfo {
  title: string;
  artist: string;
  url: string;
  coverImage: { url: string }; // Assuming coverImage is an object with a URL property
}

export async function GET(request: Request) {
  try {
    const response = await topTracks();
    const { items } = await response.json();

    const tracks: TrackInfo[] = items.slice(0, 5).map((track: any) => ({
      title: track.name,
      artist: track.artists.map((_artist: any) => _artist?.name).join(', '),
      url: track.external_urls.spotify,
      coverImage: track.album.images[1],
    }));
    return Response.json(tracks);
  } catch (error) {
    return Response.json({ message: 'some thing went wrong' });
  }
}
