import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '38571599-d8bb1b9f57ff42e3a0ab2e61e';

const getPhotosService = async (value, page) => {
  const { data } = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: `${value}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });

  return data;
};

export { getPhotosService };
