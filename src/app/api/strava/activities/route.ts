import { getActivities } from '@/lib/strava';

export async function GET(request: Request) {
  try {
    const response = await getActivities();

    if (response.status === 204 || response.status > 400) {
      return Response.json({ status: 200, message: 'some thing went wrong' });
    }

    const activities = await response.json();
    if (!activities) {
      return Response.json({ status: 200, message: 'some thing went wrong' });
    }

    return Response.json({ status: 200, activities });
  } catch (error) {
    return Response.json({ message: 'some thing went wrong' });
  }
}
