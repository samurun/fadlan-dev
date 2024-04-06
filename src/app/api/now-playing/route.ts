import { currentlyPlayingSong } from '@/lib/spotify';

export async function GET(_request: Request) {
  try {
    const response = await currentlyPlayingSong();

    if (response.status === 204 || response.status > 400) {
      return Response.json({ status: 200, isPlaying: false });
    }
    const song = await response.json();

    if (song.item === null) {
      return Response.json({ status: 200, isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((_artist: any) => _artist.name)
      .join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return Response.json({
      status: 200,
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    return Response.json({ message: 'some thing went wrong' });
  }
}
