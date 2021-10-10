import axios from 'axios';
import {
  API_URL,
  API_KEY,
  API_PARAMS,
  API_SORT_BY,
  API_SEARCH_FOR
} from '../common/constants';
import { modifyErrorLog } from '../utils/helpers';

export class ArticlesService {
  async getArticles(pageSize, page) {
    const url = `${API_URL}/top-headlines?country=us&languages=en&pageSize=${pageSize}&page=${page}${API_KEY}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      const err = modifyErrorLog(error);
      console.error('GET ARTICLES SERVICE', err);
      throw error;
    }
  }

  async searchAllArticles(topic, pageSize, page) {
    const url = `${API_URL}${API_SEARCH_FOR}${topic}&languages=en&pageSize=${pageSize}&page=${page}${API_KEY}`
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      const err = modifyErrorLog(error);
      console.error('SEARCH ARTICLES SERVICE', err);
      throw error;
    }
  }
}
