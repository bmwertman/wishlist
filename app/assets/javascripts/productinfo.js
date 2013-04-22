var product_info = [];
	function targetImg() {'use strict';
		document.getElementById('main-image').src;}
	function targetTitle() {'use strict';
		document.getElementById('btAsinTitle').value;}
	function targetPrice() {'use strict';
		document.getElementsByClassName('priceLarge').value;}
product_info.push(targetImg());
product_info.push(targetTitle());
product_info.push(targetPrice());
  console.log(product_info); 
