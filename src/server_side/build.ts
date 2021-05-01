/*
	Filename: build.ts
	This file (obviously) is used to compile all of the source code.
*/

/*
	Imports! :O
*/
	const { exec } = require('child_process');

/*
	Create some directories that are needed.
	TODO: Use "mkdirp" since that seems to be what other people use for creating directories in nodejs.
*/
exec("mkdir bin/assets");

/*
	Compile the server-side code
	TODO: Optimize this code so that I don't need to add a line for every TypeScript source code file!
*/

console.log("Compiling start_web_server.ts...");
exec("npx tsc --outFile bin/server_side/start_web_server.js src/server_side/start_web_server.ts"); // start_web_server.ts
console.log("Compiling webpack.config.ts...");
exec("npx tsc --outFile bin/server_side/webpack.config.js src/server_side/webpack.config.ts"); // webpack.config.ts

/*
	Compile the client-side code
	TODO: Optimize this code so that I don't need to add a line for every TypeScript source code file!
*/

console.log("Compiling main.ts...");
exec("npx tsc --outFile bin/client_side/main.js src/client_side/main.ts"); // main.ts

/*
	Bundle the client-side code using webpack
*/

console.log("Bundling client-side code...");
exec("npx webpack --config bin/server_side/webpack.config.js");
