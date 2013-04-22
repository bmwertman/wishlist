 if (window.location.hostname === 'www.amazon.com') {
var targetImg = document.querySelector('#holderMainImage','#main-image');
var targetTitle = document.getElementById('btAsinTitle').innerHTML;
var targetPrice = document.getElementById('actualPriceValue').innerHTML;}
else if (window.location.hostname === 'www.etsy.com') {
var targetImg = document.querySelector('#fullimage_link1','img').innerHTML;
var targetTitle = document.getElementById('item-title').innerHTML;
var targetPrice = document.querySelector('.item-amount', '.currency-value').innerHTML;}
else if (window.location.hostname === 'www.jcrew.com') {
var targetImg = document.getElementById('product_image_form');
var targetTitle = document.querySelector('#pdp-title', 'h1').innerHTML;}
else (console.log("We're sorry you must be shopping an unsupported site"))
console.log(targetTitle, targetPrice); 
