if (window.location.hostname === 'www.amazon.com') {
 var product_info = [];
 var targetImg = document.querySelector('#holderMainImage','#main-image');
 var targetTitle = document.getElementById('btAsinTitle').innerHTML;
 var targetPrice = document.getElementById('actualPriceValue').innerHTML;
  product_info.push(targetImg);
  product_info.push(targetTitle);
  product_info.push(targetPrice);}
else if (window.location.hostname === 'www.etsy.com') {
 var product_info = [];
 var targetImg = document.querySelector('#fullimage_link1','img').innerHTML;
 var targetTitle = document.getElementById('item-title').innerHTML;
 var targetPrice = document.querySelector('.item-amount', '.currency-value').innerHTML;
  product_info.push(targetImg);
  product_info.push(targetTitle);
  product_info.push(targetPrice);}
else if (window.location.hostname === 'www.jcrew.com') {
 var product_info = [];
 var targetTitle = document.querySelector('#pdp-title', 'h1').innerHTML;
  product_info.push(targetTitle);}
else (console.log("We're sorry you must be shopping an unsupported site"));
console.log(targetTitle); 
