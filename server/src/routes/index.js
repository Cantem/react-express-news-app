import express from 'express';

import healthRouter from './healthRouter';

const router = express.Router();

router.use('/health', healthRouter);

export default router;