import 'dotenv/config';
import httpMocks from 'node-mocks-http';
import {
  getTopArticles,
  searchArticles
} from '../../../src/controllers/articlesController';

describe('articlesController', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  describe('getTopArticles', () => {
    const req = {};
    it('should return status 200', async () => {
      const res = httpMocks.createResponse();

      await getTopArticles(req, res);

      expect(res.statusCode).toBe(200);
    });

    it('should throw error if credentail are incorrect', async () => {
      process.env.NEWS_API_KEY = 'INVALID';
      const res = httpMocks.createResponse();

      await expect(getTopArticles(req, res)).rejects.toThrow(
        'Request failed with status code 401'
      );
    });
  });

  describe('searchArticles', () => {
    const req = { params: { topic: 'business' } };
    it('should return status 200', async () => {
      const res = httpMocks.createResponse();

      await searchArticles(req, res);

      expect(res.statusCode).toBe(200);
    });

    it('should throw error if credentail are incorrect', async () => {
      process.env.NEWS_API_KEY = 'INVALID';
      const res = httpMocks.createResponse();

      await expect(searchArticles(req, res)).rejects.toThrow(
        'Request failed with status code 401'
      );
    });
  });
});
