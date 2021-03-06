import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIES).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }

    throw new Error('Fail during fetch data');
  });
}
function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const resp = await response.json();
      return resp;
    }

    throw new Error('Fail during fetch data');
  });
}

export default {
  getAll,
  getAllWithVideos,
};
