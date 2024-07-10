module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/',
      "/node_modules/(?!MODULE_NAME_HERE).+\\.js$"
    ],
  };
  