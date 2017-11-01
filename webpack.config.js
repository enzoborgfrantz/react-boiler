const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DefinePlugin = webpack.DefinePlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;

const baseConfig = {
  entry: {
    polyfills: './src/polyfills.js',
    index: './src/index.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve('./src/components'),
      modules: path.resolve('./src/modules'),
    },
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      excludeChunks: ['polyfills'],
    }),
  ],
};

const devConfig = {
  ...baseConfig,
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.resolve('dist'),
    hot: true,
    compress: true,
    port: 9000,
    inline: false,
    noInfo: true,
    open: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};

const prodConfig = {
  ...baseConfig,
  performance: {
    hints: 'error',
  },
  plugins: [
    ...baseConfig.plugins,
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ModuleConcatenationPlugin(),
    new UglifyJSPlugin(),
  ],
};

const analyzeConfig = {
  ...prodConfig,
  plugins: [...prodConfig.plugins, new BundleAnalyzerPlugin()],
};

module.exports = (env = 'dev') => {
  switch (env) {
    case 'dev':
      return devConfig;
    case 'prod':
      return prodConfig;
    case 'analyze':
      return analyzeConfig;
    default:
      return devConfig;
  }
};
