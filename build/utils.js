'use strict'
const path = require('path')
const fs = require('fs-extra');
const config = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')

exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
};

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.createStyleLoaders = (options) => {
  let lessResPatterns = [
    exports.resolve('./src/assets/styles/var.less'),
  ]
  // base loader definition
  const vueLoader = {
    loader: 'vue-style-loader',
  }
  const cssLoaderWithModule = {
    loader: 'css-loader',
    options: {
      // 开启 CSS Modules
      modules: true,
      // importLoaders: 1,
      // 自定义生成的类名
      localIdentName: '[local]_[hash:base64:8]',
      sourceMap: options.sourceMap,
    },
  }
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  }
  const lessLoader = { 
    loader: 'less-loader',
    options: {
      sourceMap: config.dev.cssSourceMap,
    },
  }
  const lessResLoader = {
    loader: 'style-resources-loader',
    options: {
      patterns: lessResPatterns,
      injector: 'append',
    },
  }
  const postLoader = {
    loader: 'postcss-loader',
  }

  const cssLoaderSetting = {
    test: /\.css$/,
    include: [
      exports.resolve('src'),
      exports.resolve('node_modules/iview/dist/styles/iview.css'),
    ],
    oneOf: [
      {
        resourceQuery: /module/,
        use: [
          options.extract ? MiniCssExtractPlugin.loader : vueLoader,
          cssLoaderWithModule,
          postLoader,
        ],
      },
      {
        use: [
          options.extract ? MiniCssExtractPlugin.loader : vueLoader,
          cssLoader,
          postLoader,
        ],
      },
    ],
  }
  const lessLoaderSetting = {
    test: /\.less$/,
    include: [exports.resolve('src')],
    oneOf: [
      {
        resourceQuery: /module/,
        use: [
          options.extract ? MiniCssExtractPlugin.loader : vueLoader,
          cssLoaderWithModule,
          postLoader,
          lessLoader,
          lessResLoader,
        ],
      },
      {
        use: [
          options.extract ? MiniCssExtractPlugin.loader : vueLoader,
          cssLoader,
          postLoader,
          lessLoader,
          lessResLoader,
        ],
      },
    ],
  }
  return [
    cssLoaderSetting,
    lessLoaderSetting,
  ]
}
