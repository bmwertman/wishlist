
function targetImg() {document.getElementById(imgId).src}
function targetTitle() {document.getElementById(titleId).value}
function targetPrice() {document.getElementsByClassName(priceClass).value}
function productInfo() {
  if (document(location.hostname) == 'www.amazoncom') {
		targetImg('main-image');
		targetTitle('btAsinTitle');
		targetPrice('priceLarge');
	} else if (document(location.hostname) == 'www.etsy.com') {
		targetImg('fullimage_link1 img');
		targetTitle('item-title');
	    targetPrice('v2:nth-child(1)' 'currency-value');
	} else {
		targetImg('fullimage_link1' 'img'); //assumes Jcrew and uses associated class & id selectors
		targetTitle('item-title');
		targetPrice('v2:nth-child(1)' 'currency-value');
	} 
}
