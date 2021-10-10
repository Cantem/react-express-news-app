module.exports = async () => {
  return {
    displayName: {
      name: 'EXPRESS NEWS SERVER',
      color: 'blue'
    },
    clearMocks: true,
    verbose: true,
    collectCoverageFrom: [
      '**/src/**/*.js',
      '!**/node_modules/**',
      '!**/src/app.js',
      '!**/src/server.js',
      '!**/src/swagger/**',
      '!**/src/validation/**',
      '!**/src/routes/healthRouter.js',
      '!**/client/**'
    ],
    collectCoverage: true
  };
};
