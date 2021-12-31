const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  mode: 'production',
  // 只有设置为delelopment, 才能让production模式下的默认配置不生效
  // mode: 'development', 
  // 代码的丑化和压缩
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: true,
          },
          mangle: true,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new HtmlMinimizerPlugin({
        minimizerOptions: {
          removeComments: false, // 是否要移除注释
          removeRedundantAttributes: false, // 是否移除多余的属性
          removeEmptyAttributes: true, // 是否移除一些空属性
          collapseWhitespace: false,
          minifyCSS: true,
          minifyJS: {
            mangle: {
              toplevel: true
            }
          }
        },
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

