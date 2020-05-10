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
        // chunkFilter: chunk => !chunk.name.includes('vendors'),
        // exclude: /vendors/,
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
        // common: {
        //   name: 'common',
        //   chunks: 'initial',
        //   minChunks: 2,
        //   reuseExistingChunk: true,
        // },
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
  plugins: [
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 3000,
    //   proxy: 'http://rrma.accuraty.ws/',
    //   open: false,
    // }),
    new FriendlyErrorsPlugin(),
    // new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: ['!media/**/*'],
    // }),
  ],
  watchOptions: {
    ignored: ['./node_modules/'],
  },
};
