import { Router } from 'express';
import { celebrate as validator } from 'celebrate';
import asyncHandler from 'express-async-handler';
import {
  getTopArticles,
  searchArticles
} from '../controllers/articlesController';
import { searchAllArticlesValidation } from '../validation';

const articlesRouter = Router();

articlesRouter.get('/top-articles', asyncHandler(getTopArticles));

articlesRouter.get(
  '/search-articles/:topic',
  validator(searchAllArticlesValidation),
  asyncHandler(searchArticles)
);

export default articlesRouter;
