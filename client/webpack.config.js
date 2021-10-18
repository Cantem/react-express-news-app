const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: { static: path.join(__dirname, 'src') },
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, 'dist', 'index.html')
      }),
    ]
  };
};
