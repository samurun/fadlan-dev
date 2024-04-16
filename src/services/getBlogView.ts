import { headers } from 'next/headers';
import path from 'path';

const getBlogView = async ({ slug }: { slug: string }) => {
  const headersList = headers();
  const pathname = headersList.get('x-forwarded-host') || '';
  const URL = path.join('http://', pathname, `/api/blog/view/?slug=${slug}`);

  const res = await fetch(URL);

  return res.json();
};

export default getBlogView;
