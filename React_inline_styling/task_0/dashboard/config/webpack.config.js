const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = ({ mode } = { mode: "development" }) => {
  console.log(`mode is: ${ mode }`);

  return {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, '../dist')
      },
      port: 8564,
      hot: true,
      open: true,
      compress: true,
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
			  
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
					  presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                  },
                ],
            }
        ],
    },
	resolve: {
		extensions: ['.js', '.jsx']
	  },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};