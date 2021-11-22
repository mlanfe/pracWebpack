const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build'),
    // html中src实际的引用路径是: 域名 + publicPath + html中src的取值
    // publicPath是对于打包后文件的index.html而言, 设置的是index.html中资源的引用路径
    // publicPath : '/', // 常用值: 服务器部署时使用 
    // publicPath : './', // 常用值: 在本地环境下通过index.html打开时使用
    // publicPath : 'https://cdn.example.com/assets/'
    // publicPath : '/abc' //historyApiFallback也要配置对应的值
  },
  devServer: {
    hot: 'only',
    port: 8888,
    // host: '0.0.0.0',
    // open: true,
    compress: true,
    historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [
    //     // from和to的值是域名后面的路径
    //     // from指的是 发生刷新报错的页面, 从报错的页面前往to指定的页面
    //     {from: /^\/(home|about)$/, to: "/abc/index.html"}
    //   ]
    // },
    // 配置打包后静态资源的相关属性
    static: {
      // 配置静态资源依赖的外部文件的路径
      // 主要作用是如果打包后的资源，又依赖于其他的一些资源，那么就需要指定从哪里来查找这个内容
      directory: path.join(__dirname, 'public'),
      // 当依赖的位于build文件夹外的内容改变时, 将触发整个页面重新加载, 不需要重启服务。
      watch: true, //默认启用
      // 使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。
      // 与output中的publicPath应该保持一致
      // publicPath: '/',
    },
    proxy: {
      // 解决跨域问题, 设置代理
      // "/api": "http://localhost:8888" //跨域的地址
      // "/api": {
      //   target: "http://localhost:8888", 
      //   pathRewrite: {
      //     "^/api": ""
      //   },
      //   secure: false,
      //   changeOrigin: true
    }

  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'js': path.resolve(__dirname, 'src/js'),
      'css': path.resolve(__dirname, 'src/css'),
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