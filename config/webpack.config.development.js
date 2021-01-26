const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = (env) => {
  const lintRules = (env.isEslint === 'true') && {
    enforce: 'pre',
    test: /\.(js)$/,
    loader: 'eslint-loader',
    exclude: /node_module/,
  };

  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.[hash].js',
      publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          ...lintRules
        },
        {
          test: /\.(js)$/,
          exclude: /node_module/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
      })
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true
    }
  }
}