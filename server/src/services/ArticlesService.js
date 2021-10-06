import axios from 'axios';
import { EXTERNAL_API } from '../common/constants';
import { filterArticlesWithImages, modifyErrorLog } from '../utils/helpers';

export class ArticlesService {
  async getArticles() {
    const url = new URL(
      EXTERNAL_API.DOMAIN +
        EXTERNAL_API.GET_TOP_ARTICLES +
        `&apiKey=${process.env.NEWS_API_KEY}`
    );
    try {
      const response = await axios.get(url.href);

      return filterArticlesWithImages(response.data.articles);
    } catch (error) {
      const err = modifyErrorLog(error);
      console.error('GET ARTICLES SERVICE', err);
      throw error;
    }
  }
}
