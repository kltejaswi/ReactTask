var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = 'src/client/public';
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {

	//context: './src/client/public',

	entry: [APP_DIR + '/index.js',
				 'webpack/hot/dev-server',
				 'webpack-dev-server/client?http://localhost:8080/'
			],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: 'public'	
	},
	module: {
		loaders: [
          {
          	test : /\.jsx?/,
          	include : APP_DIR,
          	exclude : /node_modules/,
          	loaders : ['react-hot-loader/webpack', 'babel-loader', 'babel'],
          },,{
				test: /\.css$/,
				loader: 'style!css?modules',
				include: /flexboxgrid/,
			}
		]
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin(),
// other plugins
  	],
	devServer: {	
		hot: true,
		inline: true, 
		contentBase: './src/client/app',
		historyApiFallback: true
	}

};

module.exports = config;
