import 'bootstrap';

window.onload = () => {
	var test_element = document.createElement('h1');
	test_element.innerText = "This element was created using TypeScript code with webpack. Hello, World!";
	document.body.appendChild(test_element); 
};