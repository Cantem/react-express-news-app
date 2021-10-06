import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { getTopArticles } from '../controllers/articlesController';


const articlesRouter = Router();

articlesRouter.get(
  '/top-articles',
  asyncHandler(getTopArticles),
);

articlesRouter.get(
  '/search-articles/:topic',
  asyncHandler({ message: 'Success' }),
);

export default articlesRouter;