var product_info = [];
var outer = document.createElement('outer');
var child = document.getElementById('main-image').children[0].cloneNode(true);
outer.appendChild(child);
var imgHtml = outer.innerHTML
	function targetTitle() {'use strict';
		document.getElementById('btAsinTitle').innerHTML;}
	function targetPrice() {'use strict';
		document.getElementsByClassName('priceLarge').innerHTML;}
product_info.push(imgHtml);
product_info.push(targetTitle());
product_info.push(targetPrice());
  console.log(product_info); 
