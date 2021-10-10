import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec, { swaggerUiOptions } from '../src/swagger/swaggerSpec';
import routes from './routes/index.js';

const app = express();

// middleware
app.use(cors());
app.use(helmet());

//swagger
app.get('/', (req, res) => res.redirect('/docs'));
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions)
);
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// routes
app.use(routes);

export default app;
