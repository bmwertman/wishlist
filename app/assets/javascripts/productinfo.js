 if (window.location.hostname === 'www.amazon.com') {
var targetImg = document.querySelector('#holderMainImage','#main-image');
var targetTitle = document.getElementById('btAsinTitle').innerHTML;
var targetPrice = document.getElementById('actualPriceValue').innerHTML;}
else if (window.location.hostname === 'www.etsy.com') {
var targetImg = document.querySelector('#fullimage_link1','img');
var targetTitle = document.getElementById('item-title').innerHTML;
var targetPrice = document.querySelector('.currency-value');}  
console.log(targetTitle, targetPrice, targetImg); 
