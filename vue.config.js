
const webpack = require('webpack');

//const CompressionPlugin = require('compression-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';


module.exports = {

//baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

// outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
outputDir: "mycli3",
//用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
assetsDir: "assets",
//指定生成的 index.html 的输出路径 (打包之后，改变系统默认的index.html的文件名)
// indexPath: "myIndex.html",
//默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
filenameHashing: false,

// lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
lintOnSave: true,
//如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
// lintOnSave: process.env.NODE_ENV !== 'production',

//是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
// runtimeCompiler: false,

/**
* 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
* 打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
* map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
* 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
* */
productionSourceMap: false,

// 它支持webPack-dev-server的所有选项
devServer: {
host: "localhost",
port: 8080, // 端口号
https: false, // https:{type:Boolean}
open: true, //配置自动启动浏览器
// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

// // 配置多个代理
// proxy: {
// "/api": {
// target: "<url>",// 要访问的接口域名
// ws: true,// 是否启用websockets
// changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
// pathRewrite: {
// '^/api': '' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
// }
// },
// "/foo": {
// target: "<other_url>"
// }
// },



},

// 配置webpack
 configureWebpack: config => {
  if (isProduction) {
   // 开启gzip压缩
   config.plugins.push(new CompressionWebpackPlugin({
    algorithm: 'gzip',
    test: /\.js$|\.html$|\.json$|\.css/,
    threshold: 10240,
    minRatio: 0.8
   }))
  };

   if (isProduction) {
      // 开启分离js
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      };
      }

 },



// configureWebpack: {//引入jquery
//     plugins: [
//       new webpack.ProvidePlugin({
//         $:"jquery",
//         jQuery:"jquery",
//         "windows.jQuery":"jquery"
//       })
//     ],


//   },

  chainWebpack: (config) => {
      /* 添加分析工具*/
      if (process.env.NODE_ENV === 'production') {
          if (process.env.npm_config_report) {
              config
                  .plugin('webpack-bundle-analyzer')
                  .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                  .end();
              config.plugins.delete('prefetch')
          }
      } },

  css: {
    extract: false,//false表示开发环境,true表示生成环境
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",    // 需要转换的单位，默认为"px"
            viewportWidth: 1920,   // 视窗的宽度，对应pc设计稿的宽度，一般是1920
            viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度,我做的是大屏监控,高度就是1080
            unitPrecision: 3,        // 单位转换后保留的精度
            propList: [        // 能转化为vw的属性列表
              "*"
            ],
            viewportUnit: "vw",        // 希望使用的视口单位
            fontViewportUnit: "vw",        // 字体使用的视口单位
            selectorBlackList: [],    // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1,        // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false,        // 媒体查询里的单位是否需要转换单位
            replace: true,        // 是否直接更换属性值，而不添加备用属性
            exclude: /(\/|\\)(node_modules)(\/|\\)/,        // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          })
        ]
      }
    }
  }



}
