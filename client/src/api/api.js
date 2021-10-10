import axios from 'axios';
import { ARTICLES_API } from './constants';

export const getArticles = async (page, perPage) => {
  const url = `${ARTICLES_API.API_URL}${ARTICLES_API.GET_TOP_ARTICLES}?pageSize=${perPage}&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to get articles', error);
    throw error;
  }
};

export const searchAllArticles = async (text) => {
  const url = new URL(
    ARTICLES_API.API_URL + `${ARTICLES_API.SEARCH_ALL_ARTICLES}/${text}`
  );
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to search articles', error);
    throw error;
  }
};
