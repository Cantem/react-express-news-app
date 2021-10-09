// defaults
const DEFAULT_PAGE_SIZE = 20;
const DEFAULT_SORT = 'relevancy'

// API url
export const API_URL = 'https://newsapi.org/v2';
export const API_KEY = `&apiKey=${process.env.NEWS_API_KEY}`;
export const API_PARAMS = `&pageSize=${DEFAULT_PAGE_SIZE}`;
export const API_SORT_BY = `&sortBy=${DEFAULT_SORT}`;
export const API_SEARCH_FOR = '/everything?q=';
