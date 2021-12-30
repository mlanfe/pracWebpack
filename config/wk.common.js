const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = require('./wk.dev.js');
const prodConfig = require('./wk.prod.js');

function getPath(relativePath) {
  // webpack的启动路径+相对路径
  return path.resolve(process.cwd(), relativePath)
}

const commonConfig = (isProduction) => {
  return {
    // entry和loader相对于context定位,
    // context默认值是使用 Node.js 进程的当前工作目录
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'js/bundle.js',
      path: getPath('./build')
      // html中src实际的引用路径是: 域名 + publicPath + html中src的取值
      // publicPath是对于打包后文件的index.html而言, 设置的是index.html中资源的引用路径
      // publicPath : '/', // 常用值: 服务器部署时使用 
      // publicPath : './', // 常用值: 在本地环境下通过index.html打开时使用
      // publicPath : 'https://cdn.example.com/assets/'
      // publicPath : '/abc' //historyApiFallback也要配置对应的值
    },
    // performance: {
    //   // hints: false,
    //   maxEntrypointSize: 512000,
    //   maxAssetSize: 512000
    // },
    resolve: {
      alias: {
        '@': getPath( './src'),
        'js': getPath('./src/js'),
        'css': getPath('./src/css'),
      },
      extensions: ['.js', '.json', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.(less|css)$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              },
            },
            'postcss-loader',
            'less-loader',
          ]
        },
        // {
        //   test: /\.less$/i,
        //   use: [
        //     'style-loader',
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         importLoaders: 2,
        //       },
        //     },
        //     'postcss-loader',
        //     'less-loader',
        //   ]
        // },
        {
          test: /\.(png|svg|gif|jpe?g)$/i,
          type: "asset",  
          parser: {
            dataUrlCondition: {
              maxSize: 100 * 1024 
            }
          },
          generator: {
            filename: 'img/[name].[hash:6][ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf)$/i,
          type: "asset/resource",  
          generator: {
            filename: 'font/[name].[hash:6][ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DefinePlugin({
        BASE_URL: '"./"'
      }),
      new HtmlWebpackPlugin({
        title: "hello webpack",
        template: "./public/index.html"
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            globOptions: {
              ignore: [
                '**/index.html',
                '**/abc.txt'
              ]
            }
          }
        ]
      }),
      new ReactRefreshWebpackPlugin(),
    ],
  
  }
}


module.exports = function(env) {
  const isProduction = env.production

  // 将当前环境类型存入node的process对象, 以便abel.config.js判断当前环境
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const config = isProduction ? prodConfig : devConfig
  const mergeConfig = merge(commonConfig(isProduction), config)

  return mergeConfig
} 