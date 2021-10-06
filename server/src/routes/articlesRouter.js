import { Router } from 'express';
import asyncHandler from 'express-async-handler';


const articlesRouter = Router();

articlesRouter.get(
  '/top-articles',
  asyncHandler({ message: 'Success' }),
);

articlesRouter.get(
  '/search-articles/:topic',
  asyncHandler({ message: 'Success' }),
);

export default articlesRouter;