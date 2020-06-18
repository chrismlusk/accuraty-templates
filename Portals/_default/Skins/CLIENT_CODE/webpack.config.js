const { resolve } = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { project } = require('./gulpfile.js/config');

module.exports = {
  mode: project.mode,
  entry: project.webpack.entries,
  output: {
    filename: '[name].bundle.js',
    path: resolve(process.env.INIT_CWD, 'public/js'),
  },
  devtool: project.mode === 'development' ? 'inline-source-map' : 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /vendors/,
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
            presets: ['@babel/preset-env'],
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
