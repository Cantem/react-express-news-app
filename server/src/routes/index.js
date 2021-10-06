import express from 'express';

import healthRouter from './healthRouter';
import articlesRouter from './articlesRouter';

const router = express.Router();

router.use('/health', healthRouter);
router.use(articlesRouter);

export default router;
