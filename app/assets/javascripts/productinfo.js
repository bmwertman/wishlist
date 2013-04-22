var product_info = [];
	function targetImg(id) {'use strict';
		document.getElementById(id ).src;}
	function targetTitle(id) {'use strict';
		document.getElementById(id).value;}
	function targetPrice(id) {'use strict';
		document.getElementsByClassName(id).value;}
product_info.push(targetImg('main-image'));
product_info.push(targetTitle('btAsinTitle'));
product_info.push(targetPrice('priceLarge'));
  window.alert(product_info); 
