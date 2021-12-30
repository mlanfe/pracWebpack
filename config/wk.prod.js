const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      
      // filename: "css/[name].[contenthash:6].css"
    })
  ],
}