const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	module: {
		// Truncated for clarity
	},
	plugins: [
		// Truncated for clarity
	], 
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: `index.html`
		}
	}, 
	output: {
		publicPath: `auto`
	}
}