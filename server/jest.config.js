module.exports = async () => {
  return {
    displayName: {
      name: 'NEWS API SERVICE',
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
      '!**/src/routes/healthRouter.js'
    ],
    collectCoverage: true
  };
};
