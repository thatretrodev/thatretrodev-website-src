var $ = require("jquery");
import 'bootstrap';

console.log("Thatretrodev's website code @ https://github.com/thatretrodev/thatretrodev-website-src is now running!");

window.onload = () => {
	var test_element = document.createElement('p');
	test_element.innerText = "This element was created using TypeScript code with webpack. Hello, World!";
	//$("#page_content").append(test_element); 
};