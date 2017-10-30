const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const entry = './src/index.js';

const baseConfig = {
  entry,
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.[hash].js',
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
  plugins: [HtmlWebpackPluginConfig],
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
  performance: {
    hints: 'warning',
  },
};

const prodConfig = {
  ...baseConfig,
  performance: {
    hints: 'error',
  },
  plugins: [
    ...baseConfig.plugins,
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};

module.exports = function (env = 'dev') {
  switch (env) {
    case 'dev':
      return devConfig;
    case 'prod':
      return prodConfig;
    default:
      return devConfig;
  }
};
