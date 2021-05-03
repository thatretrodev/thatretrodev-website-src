/*
	Filename: start_web_server.ts
	This file (obviously) starts a local web server that is used for testing the website.
*/

const express = require("express");
var path = require("path");
var jsdom = require("jsdom");
let ejs = require('ejs');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('bin/assets'));

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function create_preview_from_blog_post(blog_post_path) {
	var html_data = "";
	var post_text = "";

	ejs.renderFile(blog_post_path, {}, function(err, str){
		html_data = str;
	});

	const { window } = new jsdom.JSDOM(html_data);
	var $ = require('jquery')(window);
	post_text = $("#post_contents").text(); //window.document.getElementById("post_contents").innerText;
	console.log("DEBUG STUFF: " + post_text);
	if (new String(post_text).length > 64) {
		post_text = post_text.substring(0, 100) + "...";
	}
	
	return post_text;
}

function get_title_from_blog_post(blog_post_path) {
	var html_data = "";
	var post_title = "";

	ejs.renderFile(blog_post_path, {}, function(err, str){
		html_data = str;
	});

	const { window } = new jsdom.JSDOM(html_data);
	post_title = window.document.querySelector('meta[name="blog_post_title"]').content;

	return post_title;
}

function get_date_from_blog_post(blog_post_path) {
	var html_data = "";
	var post_date = "";

	ejs.renderFile(blog_post_path, {}, function(err, str){
		html_data = str;
	});

	const { window } = new jsdom.JSDOM(html_data);
	post_date = window.document.querySelector('meta[name="blog_post_date"]').content;

	return post_date;
}

//var blog_posts = [];
var blog_posts:string[][] = [];

function create_blog_post_pages(expressapp) {
	var finder = require('findit')(__dirname + "/../../views/blog_posts");
	finder.on('file', function (file) {
		//console.log('Found: ' + path.basename(file));
		console.log("Adding blog post page: " + '/blog/' + path.basename(file).replace(".ejs", ""));
		blog_posts.push([get_title_from_blog_post(file), get_date_from_blog_post(file), create_preview_from_blog_post(file), path.basename(file).replace(".ejs", "")]);
		expressapp.get('/blog/' + path.basename(file).replace(".ejs", ""), (req, res) => {res.render("blog_post_viewer", {blog_post_template_file: 'blog_posts/' + path.basename(file).replace(".ejs", "")});}); // TODO: This WILL break if you put a blog post template inside a directory that's inside blog_posts.
	});
}

create_blog_post_pages(app);
setTimeout(function() {console.log(blog_posts);}, 100);

app.get('/', (req, res) => {
	res.render('index');
	//res.render('index', {randomnumberthing: getRandomInt(0, 99999999)});
	//res.send('<head><link rel="stylesheet" href="css/bootstrap.min.css"><script src="js/main.js"></script></head><body><title>Test!</title><h1>Test!</h1></body>');
});

app.get('/blog', (req, res) => {
	res.render('blog_index', {blog_posts: blog_posts});
});

app.listen(port, () => {
	console.log(`Testing server listening at http://localhost:${port}`);
});