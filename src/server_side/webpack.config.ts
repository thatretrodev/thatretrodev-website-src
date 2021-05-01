/*
	Filename: webpack.config.ts
	This file is the configuration used for webpack.
*/

const path = require('path');

module.exports = {
	entry: './bin/client_side/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'bin/client_side/webpack')
	}
};