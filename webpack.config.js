const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
console.log(CleanWebpackPlugin)
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
	},
	module: {
		rules: [],
	},
	devServer: {
		static: path.resolve(__dirname, './dist'),
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
		}),
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, './'),
			verbose: true,
			dry: false,
		}),
	],
}
