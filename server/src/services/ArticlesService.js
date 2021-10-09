import axios from 'axios';
import {
  API_URL,
  API_KEY,
  API_PARAMS,
  API_SORT_BY,
  API_SEARCH_FOR
} from '../common/constants';
import { filterArticlesWithImages, modifyErrorLog } from '../utils/helpers';

export class ArticlesService {
  async getArticles() {
    const url = `${API_URL}/top-headlines?country=us&languages=en${API_KEY}${API_PARAMS}`;
    try {
      const response = await axios.get(url);

      return filterArticlesWithImages(response.data.articles);
    } catch (error) {
      const err = modifyErrorLog(error);
      console.error('GET ARTICLES SERVICE', err);
      throw error;
    }
  }

  async searchAllArticles(topic) {
    const url = `${API_URL}${API_SEARCH_FOR}${topic}${API_KEY}${API_PARAMS}${API_SORT_BY}`;
    try {
      const response = await axios.get(url);
      return filterArticlesWithImages(response.data.articles);
    } catch (error) {
      const err = modifyErrorLog(error);
      console.error('SEARCH ARTICLES SERVICE', err);
      throw error;
    }
  }
}
