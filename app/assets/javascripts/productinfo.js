var product_info = [];
var baseurl = "media/images/";
	function targetImg(id) {'use strict';
		document.getElementById(id ).src.indexOf( baseurl+"selection-off.png" ) >= 0;}
	function targetTitle(id) {'use strict';
		document.getElementById(id).value;}
	function targetPrice(id) {'use strict';
		document.getElementsByClassName(id).value;}
product_info.push(targetImg('main-image'));
product_info.push(targetTitle('btAsinTitle'));
product_info.push(targetPrice('priceLarge'));
  window.alert(product_info); 
