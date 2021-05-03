var $ = require("jquery");
import 'bootstrap';

window.onload = () => {
	var test_element = document.createElement('p');
	test_element.innerText = "This element was created using TypeScript code with webpack. Hello, World!";
	//$("#page_content").append(test_element); 
};