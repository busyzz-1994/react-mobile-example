const vConsolePlugin = require('vconsole-webpack-plugin');
const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  setWebpackOptimizationSplitChunks,
  addWebpackModuleRule,
  addWebpackPlugin,
} = require('customize-cra');
const isDevENV = process.env.NODE_ENV === 'development';
// vendors regexes
const reactVendorsRegex =
  /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-router|history)[\\/]/;
module.exports = override(
  // 按需引入 antd-mobile 以及样式文件
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  // 兼容 less 文件，可修改主题
  addWebpackModuleRule({
    test: /\.less$/,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      {
        loader: require.resolve('less-loader'),
        options: {
          lessOptions: {
            modifyVars: {
              '@brand-primary': '#1DA57A',
              '@brand-wait': '#1DA57A',
              '@brand-primary-tap': '#55993a',
            },
          },
        },
      },
    ],
  }),
  // 添加调试工具 只在开发环境生效
  addWebpackPlugin(
    new vConsolePlugin({
      enable: isDevENV,
    })
  ),
  // 将样式文件中的 px 单位转换为 vw
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      unitToConvert: 'px', // 需要转换的单位，默认为"px"；
      viewportWidth: 750, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的小数位数
      propList: ['*'], // 要进行转换的属性列表,*表示匹配所有,!表示不转换
      viewportUnit: 'vw', // 转换后的视口单位
      fontViewportUnit: 'vw', // 转换后字体使用的视口单位
      selectorBlackList: [], // 不进行转换的css选择器，继续使用原有单位
      minPixelValue: 1, // 设置最小的转换数值
      mediaQuery: false, // 设置媒体查询里的单位是否需要转换单位
      replace: true, // 是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules/],
    }),
  ]),
  // 分包 减小主 bundle 文件大小，加快首屏渲染速度
  setWebpackOptimizationSplitChunks({
    chunks: 'all',
    name: false,
    minChunks: 1,
    cacheGroups: {
      reactVendor: {
        test: reactVendorsRegex,
        name: 'reactVendor',
      },
    },
  })
);
