import axios from 'axios';

const API_KEY = '48520843-c7005fc601dadff0df2bc86d2';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = BASE_URL;

const searchParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 15,
};

export async function getPhotos(query, page) {
  try {
    const response = await axios.get('', {
      params: { ...searchParams, q: query, page },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
