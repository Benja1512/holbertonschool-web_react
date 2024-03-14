const path = require('path');

module.exports = {
  mode: 'development', // O 'production' dependiendo de tu entorno
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
