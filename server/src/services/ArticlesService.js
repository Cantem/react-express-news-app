import { EXTERNAL_API } from '../common/constants';
import axios from 'axios';

export class ArticlesService {
  async getArticles() {
    const url = new URL(EXTERNAL_API.DOMAIN + EXTERNAL_API.GET_TOP_ARTICLES + `&apiKey=${process.env.NEWS_API_KEY}`);
    try {
      const response = await axios.get(url.href);
      return response.data.articles;
    } catch(error) {
      console.error('GET ARTICLES SERVICE', error);
      throw error
    }
  }
}