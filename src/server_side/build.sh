#!/bin/bash

#
#	Filename: build.ts
#	This file (obviously) is used to compile all of the source code.
#

#
#	Create some directories that are needed.
#

mkdir -p bin/assets/js
mkdir -p bin/client_side/webpack

#
#	Compile the server-side code
#	TODO: Optimize this code so that I don't need to add a line for every TypeScript source code file!
#

echo "Compiling start_web_server.ts..."
npx tsc --outFile bin/server_side/start_web_server.js src/server_side/start_web_server.ts
echo "Compiling webpack.config.ts..."
npx tsc --outFile bin/server_side/webpack.config.js src/server_side/webpack.config.ts

#
#	Compile the client-side code
#	TODO: Optimize this code so that I don't need to add a line for every TypeScript source code file!
#

echo "Compiling main.ts..."
npx tsc --outFile bin/client_side/main.js src/client_side/main.ts

#
#	Bundle the client-side code using webpack
#

echo "Bundling client-side code..."
npx webpack --config bin/server_side/webpack.config.js -o bin/client_side/webpack > /dev/null

echo "Creating asset data..."
cp bin/client_side/webpack/main.js bin/assets/js/