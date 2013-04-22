var product_info = [];
var baseurl = "media/images/";
	function target_img(id) {'use strict';
		document.getElementById(id ).src.indexOf( baseurl+"selection-off.png" ) >= 0;}
	function target_title(id) {'use strict';
		document.getElementById(id).value;}
	function target_price(id) {'use strict';
		document.getElementsByClassName(id).value;}
  if (window.location.hostname === 'www.amazon.com') {
		target_img('main-image');
		target_title('btAsinTitle');
		target_price('priceLarge');
	} else if (window.location.hostname === 'www.etsy.com') {
		target_img('fullimage_link1 img');
		target_title('item-title');
		target_price('v2:nth-child(1) currency-value');
	} else {
		target_img('fullimage_link1 img'); //assumes Jcrew and uses associated class & id selectors
		target_title('item-title');
		target_price('v2:nth-child(1) currency-value');
	} 
var targetImg = target_img();
var targetTitle = target_title();
var targetPrice = target_price();
product_info.push(targetImg);
product_info.push(targetTitle);
product_info.push(targetPrice);
  window.alert(product_info); 
