import axios from 'axios';
import { ARTICLES_API } from './constants';

export const getArticles = async () => {
  const url = new URL(ARTICLES_API.DOMAIN + ARTICLES_API.GET_TOP_ARTICLES);
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
    ARTICLES_API.DOMAIN + `${ARTICLES_API.SEARCH_ALL_ARTICLES}/${text}`
  );
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Failed to search articles', error);
    throw error;
  }
};
