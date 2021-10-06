import 'dotenv/config';
import request from 'supertest';
import app from '../../src/app';

describe('articles', () => {
  describe('GET /top-articles', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules(); // Most important - it clears the cache
      process.env = { ...OLD_ENV }; // Make a copy
    });

    afterAll(() => {
      process.env = OLD_ENV; // Restore old environment
    });

    it('should return status 200 for valid requests', async () => {
      const url = '/top-articles';
      const response = await request(app).get(url);

      expect(response.status).toBe(200);
    });

    it('should return status 500 for invalid requests - wrong credentials', async () => {
      process.env.NEWS_API_KEY = 'INVALID';
      const url = '/top-articles';
      const response = await request(app).get(url);

      expect(response.status).toBe(500);
    });
  });
});
