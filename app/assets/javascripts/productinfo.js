var product_info = [];
var targetImg = (function() {'use strict';
                             document.getElementById().src;})();
    var targetTitle = (function() {'use strict';
                                  document.getElementById().value;})();
    var targetPrice = (function() {'use strict';
                                  document.getElementsByClassName().value;})();
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
  alert(product_info);
