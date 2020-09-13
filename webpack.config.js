const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');

const { project, paths } = require('./gulpfile.js/config');
const { getWebpackEntries } = require('./gulpfile.js/utils');

const devMode = project.mode !== 'production';

const publicDistPath = paths.dist.replace(paths.app, '');

module.exports = {
  mode: project.mode,
  entry: getWebpackEntries(),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, paths.dist),
    pathinfo: devMode,
    publicPath: publicDistPath,
  },
  devtool: devMode ? 'eval-cheap-source-map' : false,
  optimization: {
    minimize: !devMode,
    minimizer: [
      new TerserPlugin({
        exclude: /vendors/,
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    removeEmptyChunks: !devMode,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0,
        },
        common: {
          test: /[\\/]scripts\/(App|config)[\\/]/,
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3 }],
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  watchOptions: {
    ignored: ['./node_modules/'],
  },
};
