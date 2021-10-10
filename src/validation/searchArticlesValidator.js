import { Joi } from 'celebrate';

export const searchAllArticlesValidation = {
  query: {
    topic: Joi.string().required(),
    pageSize: Joi.number(),
    page: Joi.number()
  }
};

export const getTopArticlesValidation = {
  query: {
    pageSize: Joi.number(),
    page: Joi.number()
  }
};
