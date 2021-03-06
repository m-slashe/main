const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isProduction = global.process.argv.find(param => param.indexOf('production') !== -1);

const hash = isProduction ? 'chunkhash' : 'hash';
console.log(`Utilizando ${hash}`);

module.exports = {
	entry: {
		'babel-polyfill': 'babel-polyfill',
		main: './src/main.js',
	},
	devtool: isProduction ? 'hidden-source-map' : 'eval-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		hot: true
	},
	output: {
		filename: `[name].[${hash}].js`,
	},
	optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'flow'],
						plugins: ['transform-decorators-legacy', 'syntax-dynamic-import'],
					},
				},
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				loader: 'url-loader',
				test: /\.(svg|eot|ttf|woff|woff2|png|gif)?$/,
				options: {
					limit: 1000, // if less than 10 kb, add base64 encoded image to css
					name: 'assets/[hash].[ext]', // if more than 10 kb move to this folder in build using file-loader
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			'window.jQuery': 'jquery',
			jQuery: 'jquery',
		}),
	],
};
