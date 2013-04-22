var product_info = [];
	function targetImg() {'use strict';
		document.getElementById('main-image').src;}
	function targetTitle() {'use strict';
		document.getElementById('btAsinTitle').innerText;}
	function targetPrice() {'use strict';
		document.getElementsByClassName('priceLarge').innerText;}
product_info.push(targetImg());
product_info.push(targetTitle());
product_info.push(targetPrice());
  console.log(product_info); 
