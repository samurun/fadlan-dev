const getBlogs = async () => {
  return new Promise((resolve, reject) => {
    fetch('https://65f618a241d90c1c5e0a9515.mockapi.io/api/v1/blog', {
      cache: 'no-store',
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export default getBlogs;
