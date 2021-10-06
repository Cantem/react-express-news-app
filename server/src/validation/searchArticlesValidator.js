import { Joi } from 'celebrate';

export const searchAllArticlesValidation = {
  params: {
    topic: Joi.string().required()
  }
};
