import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send({ message: 'Success' });
});

export default router;