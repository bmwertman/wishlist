var product_info = [];
var el_id = document.getElementById();
var el_class = document.getElementsByClassName();
var state = '';
                           
	var targetImg = function() {'use strict';
		if (el_id !== null) {
			state = el_id.src;}
                               };
	var targetTitle = function() {'use strict';
		if (el_id !== null) {
			state = el_id.value;}
                                  };
	var targetPrice = function() {'use strict';
		if (el_class !== null) {
			state = el_class.value;}
                                  };
  if (document(location.hostname) === 'www.amazon.com') {
		targetImg('main-image');
		targetTitle('btAsinTitle');
		targetPrice('priceLarge');
	} else if (document(location.hostname) === 'www.etsy.com') {
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
