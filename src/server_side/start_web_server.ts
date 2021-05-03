/*
	Filename: start_web_server.ts
	This file (obviously) starts a local web server that is used for testing the website.
*/

const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.static('bin/assets'));

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}


app.get('/', (req, res) => {
	res.render('index');
	//res.render('index', {randomnumberthing: getRandomInt(0, 99999999)});
	//res.send('<head><link rel="stylesheet" href="css/bootstrap.min.css"><script src="js/main.js"></script></head><body><title>Test!</title><h1>Test!</h1></body>');
});

app.get('/blog', (req, res) => {
	res.render('blog_index', {blog_posts: [["test", "02/05/2021", "Hello, World!", 0], ["test", "02/05/2021", "Hello, World!", 0]]});
});

app.listen(port, () => {
	console.log(`Testing server listening at http://localhost:${port}`);
});