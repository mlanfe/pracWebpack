const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'production',
  // 只有设置为delelopment, 才能让production模式下的默认配置不生效
  // mode: 'development', 
  optimization: {
    // minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],

  },
  plugins: [
    new MiniCssExtractPlugin({
      // 影响单独抽出的所有css文件的文件名和文件路径(包括动态导入导致单独生成的css文件)
      // 机制类似于 output.filename
      filename: "css/[name].[contenthash:6].bundle.css",
      // 机制类似于 output.chunkFilename
      chunkFilename: "css/[name].[contenthash:6].chunk.css"
    })
  ],
}