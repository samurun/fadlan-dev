const getProjects = async () => {
  return new Promise((resolve, reject) => {
    fetch('../constants/projects.json', {
      cache: 'no-store',
    })
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export default getProjects;
