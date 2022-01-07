const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  // mode: 'production',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'math-utils.min.js',
    library: {
      name: 'mathUtils',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  // plugins: [
  //   new CleanWebpackPlugin(),
  // ],
}

