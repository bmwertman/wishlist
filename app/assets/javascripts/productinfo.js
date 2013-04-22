var product_info = [];
var baseurl = "media/images/";
	function targetImg(id) {'use strict';
		return document.getElementById(id ).src.indexOf( baseurl+"selection-off.png" ) >= 0;}
	function targetTitle(id) {'use strict';
		return document.getElementById(id).value;}
	function targetPrice(id) {'use strict';
		return document.getElementsByClassName(id).value;}
  if (window.location.hostname === 'www.amazon.com') {
		targetImg('main-image');
		targetTitle('btAsinTitle');
		targetPrice('priceLarge');
	} else if (window.location.hostname === 'www.etsy.com') {
		targetImg('fullimage_link1 img');
		targetTitle('item-title');
		targetPrice('v2:nth-child(1) currency-value');
	} else {
		targetImg('fullimage_link1 img'); //assumes Jcrew and uses associated class & id selectors
		targetTitle('item-title');
		targetPrice('v2:nth-child(1) currency-value');
	} 

product_info.push(targetImg);
product_info.push(targetTitle);
product_info.push(targetPrice);
  window.alert(product_info);
