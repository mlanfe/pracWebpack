const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
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
    new HtmlWebpackPlugin({
      title: "hello webpack",
      template: "./public/index.html"
    })

  ]
}