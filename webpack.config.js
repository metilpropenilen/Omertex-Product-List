const path = require( 'path' );
// const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	entry: path.join( __dirname + '/src/index.js' ),
	output: {
		path: path.join( __dirname + "/public/" ),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/, /server/],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					// {
					// 	loader: "style-loader" // creates style nodes from JS strings
					// },
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							// localIdentName: '[name]__[local]___[hash:base64:5]'
						},
					},
					{
						loader: "sass-loader",
						options: {
							minimize: true,
							sourceMap: true
						}
					},
					// MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			}, {
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/'
						},
					},
				],
			},
		]
	}
	,
	plugins: [
	// 	new ExtractTextPlugin('main.css', {
	// 		allChunks: true
	// 	})
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};