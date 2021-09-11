const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let debug = true;
let mode = 'development';

console.log(__dirname);

module.exports = ( env, options )=>
{
	return {
		//entry: './src/main.js',
		entry: [`${__dirname}/src/main.js`, `${__dirname}/src/css/main.css`],
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'bundle.js',
			chunkFilename: '[id].js',
			publicPath: './dist'
		},
		module:{
			rules: [
				{
					test: /.\js$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
							   presets:['@babel/preset-env']
							}
						}
					]
				},
				{
					test: /\.html$/,
					use: ['html-loader'] 
				},
				{
					test: /\.(jpg|png)$/,
					use: ['file-loader']
				},
				{
					test: /\.css$/,
					use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './dist'
						}
					}, 'css-loader']
				}
			]
		},
		plugins:[
			new MiniCssExtractPlugin({filename: debug ? 'css/main.css' : 'css/styles-[contenthash].css', chunkFilename: 'css/[id].css'}),
			new HtmlWebpackPlugin({
			    hash: true,
			    title: 'Social Baboon',
			    metaDesc: 'Social Baboon',
			    template: './src/index.html',
			    filename: 'index.html',
			    inject: 'body'
			})
		],
		mode: options.mode ? 'development' : 'production',
		output: {
			clean: true
		},
		// resolve: {
		// 	extensions: ['.js', '.css']
		// },
		optimization: {
		    minimize: debug ? false : true
		}
	}
}