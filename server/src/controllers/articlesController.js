import { ArticlesService } from '../services/ArticlesService.js';

const articlesService = new ArticlesService();

export async function getTopArticles(req, res) {
  try {
    const data = await articlesService.getArticles();

    res.send(data);
  } catch (error) {
    console.error("GET TOP ARTICLES CONTROLLER", error);
    throw error;
  }
}