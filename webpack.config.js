const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const entry = './src/index.js';

const baseConfig = {
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
  entry: [entry],
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
};

const prodConfig = {
  ...baseConfig,
  entry,
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
