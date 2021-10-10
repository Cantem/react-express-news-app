import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'News Service',
    version: '1.0.0'
  },
  servers: [
    {
      url: '/'
    }
  ],
  tags: [
    {
      name: 'Health',
      description: 'Health Check'
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./**/swagger/**/*.yaml']
};

export const swaggerUiOptions = {
  customJs: '../custom.js'
};

export default swaggerJSDoc(options);
