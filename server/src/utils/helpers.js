export const filterArticlesWithImages = (articles) =>
  articles.filter((article) => article.urlToImage);

export const modifyErrorLog = (error) => ({
  status: error?.response?.status,
  statusText: error?.response?.statusText,
  responseMessage: error?.response?.data?.message
});
