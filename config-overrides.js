const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy,addWebpackAlias,addWebpackPlugin,addPostcssPlugins} = require('customize-cra');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
process.env.GENERATE_SOURCEMAP = "false";  //关闭GENERATE_SOURCEMAP

const dropConsole = () => {
  return (config) => {
    if(config.optimization.minimizer){
      config.optimization.minimizer.forEach( (minimizer) => {
        if( minimizer.constructor.name === 'TerserPlugin'){
          minimizer.options.terserOptions.compress.pure_funcs = ['console.log']
          
        }
       
      })       
    }
    return config;
  }
}
module.exports = override(
  addDecoratorsLegacy(),  //配置装饰器写法
   fixBabelImports('import', {  //第三方按需引入
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),                     //配置less
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@primary-color': '#1DA57A' }
   }),
   addWebpackAlias({     //配置绝对路径
    '@': path.resolve(__dirname, 'src'),
  }),
  // 其他配置 ...,
  // addWebpackPlugin(new ProgressBarPlugin({ //打包进度条
  //     complete: "blue",
  //     format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
  //     clear: true
  //   })
  // ),
  // addWebpackPlugin(    //打包分析插件
  //   new BundleAnalyzerPlugin()
  // ),
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      viewportWidth: 1920, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.nops'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 5, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      exclude: /(\/|\\)(node_modules)(\/|\\)/  //排除第三方框架 important!
     })
  ]),
  dropConsole()  //生产环境去除console
 );