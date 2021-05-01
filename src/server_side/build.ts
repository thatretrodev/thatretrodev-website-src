/*
	Filename: build.ts
	This file (obviously) is used to compile all of the source code.
*/

/*
	Imports! :O
*/
	const { exec } = require('child_process');

/*
	Compile the server-side code
	TODO: Optimize this code so that I don't need to add a line for every TypeScript source code file!
	*/
	
exec("npx tsc --outFile bin/server_side/start_web_server.js src/server_side/start_web_server.ts"); // start_web_server.ts