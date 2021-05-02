/*
	Filename: start_web_server.ts
	This file (obviously) starts a local web server that is used for testing the website.
*/

const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('bin/assets'));

app.get('/', (req, res) => {
	res.send('<head><script src="js/main.js"></script></head><body><title>Test!</title><h1>Test!</h1></body>');
});

app.listen(port, () => {
	console.log(`Testing server listening at http://localhost:${port}`);
});