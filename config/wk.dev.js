const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    // hot: 'only',
    hot: true,
    port: 8888,
    // host: '0.0.0.0',
    open: true,
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
      directory: path.join(__dirname, '../public'),
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
  plugins: [

  ]
}