const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')

function getPath(relativePath) {
  return path.resolve(process.cwd(), relativePath)
}


module.exports = {
  // 只有设置为delelopment, 才能让production模式下的默认配置不生效
  // mode: 'development', 
  mode: 'production',
  // 使用外部依赖, 在生产环境下, 外部依赖将不会被打包至build文件夹下
  // 键: 对应包的名词; 值: 对应包导出的全局对象的名称
  externals: {
    dayjs: 'dayjs',
    lodash: '_',
    jquery: 'jQuery',
  },
  // 代码的丑化和压缩
  optimization: {
    // 生产环境下默认为true, 配合TerserPlugin实现js的tree shaking
    usedExports: true,
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
          collapseWhitespace: true,
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
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${getPath('./src')}/**/*`, { nodir: true }),
      safelist: ['body', 'html']
    }),
  ],
}

