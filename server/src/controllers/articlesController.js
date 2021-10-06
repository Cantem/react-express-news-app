import { ArticlesService } from '../services/ArticlesService.js';
import { modifyErrorLog } from '../utils/helpers';

const articlesService = new ArticlesService();

export async function getTopArticles(req, res) {
  try {
    const data = await articlesService.getArticles();

    res.send(data);
  } catch (error) {
    const err = modifyErrorLog(error);
    console.error("GET TOP ARTICLES CONTROLLER", err);
    throw error;
  }
}
