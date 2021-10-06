import 'dotenv/config';
import app from './app';

export default app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
