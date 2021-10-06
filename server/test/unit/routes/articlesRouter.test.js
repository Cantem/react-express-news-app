import 'dotenv/config';
import request from 'supertest';
import app from '../../../src/app';
import * as articlesController from '../../../src/controllers/articlesController';

jest.mock('../../../src/controllers/articlesController', () => {
  const mockSuccessResponse = async (_, res) => {
    res.status(200).send();
    return Promise.resolve();
  };
  return {
    getTopArticles: jest.fn().mockImplementation(mockSuccessResponse),
    searchArticles: jest.fn().mockImplementation(mockSuccessResponse)
  };
});

describe('articlesRouter', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });

  afterAll(() => {
    jest.clearAllMocks();
    process.env = OLD_ENV; // Restore old environment
  });

  describe('get /top-articles', () => {
    it('should return status 200', async () => {
      await request(app).get('/top-articles');
      expect(
        articlesController.getTopArticles.mock.calls[0][0].params
      ).toStrictEqual({});
    });
  });

  describe('get /search-articles/:topic', () => {
    it('should return status 200', async () => {
      const topic = 'business';
      await request(app).get(`/search-articles/${topic}`);
      expect(
        articlesController.searchArticles.mock.calls[0][0].params
      ).toStrictEqual({ topic: 'business' });
    });
  });
});
