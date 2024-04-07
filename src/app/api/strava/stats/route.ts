import { getAthleteStatsActivities } from '@/lib/strava';

export async function GET(_request: Request) {
  try {
    const response = await getAthleteStatsActivities();

    if (response.status === 204 || response.status > 400) {
      return Response.json({ status: 200, message: 'some thing went wrong' });
    }

    const stats = await response.json();
    if (!stats) {
      return Response.json({ status: 200, message: 'some thing went wrong' });
    }

    return Response.json({ status: 200, ...stats });
  } catch (error) {
    return Response.json({ message: 'some thing went wrong' });
  }
}
