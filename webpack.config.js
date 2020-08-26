const { resolve } = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { project, paths } = require('./gulpfile.js/config');

module.exports = {
  mode: project.mode,
  entry: project.webpack.entries,
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, `${paths.dist}`),
  },
  devtool:
    project.mode === 'development' ? 'eval-cheap-source-map' : 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /vendors/,
        sourceMap: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          enforce: true,
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
  plugins: [new FriendlyErrorsPlugin()],
  watchOptions: {
    ignored: ['./node_modules/'],
  },
};
