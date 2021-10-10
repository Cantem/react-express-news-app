import { ArticlesService } from '../services/ArticlesService.js';
import { modifyErrorLog } from '../utils/helpers';

const articlesService = new ArticlesService();

export async function getTopArticles(req, res) {
  const { query: { pageSize, page } } = req;
  try {
    const data = await articlesService.getArticles(pageSize, page);
    res.send(data);
  } catch (error) {
    const err = modifyErrorLog(error);
    console.error('GET TOP ARTICLES CONTROLLER', err);
    throw error;
  }
}

export async function searchArticles(req, res) {
  const { query: { topic, pageSize, page } } = req;
  try {
    const data = await articlesService.searchAllArticles(topic, pageSize, page);
    res.send(data);
  } catch (error) {
    const err = modifyErrorLog(error);
    console.error('SEARCH ARTICLES CONTROLLER', err);
    throw error;
  }
}
