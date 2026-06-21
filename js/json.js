var title = 'Apple iPhone 13';
var noOfReviews = 16673;
var originalPrice = 69900;
var discount = 29;
var sellingPrice = 49499;

var productInfo = {
    title: 'Apple iPhone 15 pro max',
    noOfReviews: 16673,
    originalPrice: 69900,
    discount: 29,
    sellingPrice: 49499
};

console.log(productInfo.title);

// we can update the value in 2 ways
productInfo.noOfReviews=17000;
productInfo['discount'] = 30;

console.log(productInfo);

delete productInfo.discount;

console.log(productInfo);

const productInfoConst = {
    title: 'Apple iPhone 13',
    noOfReviews: 16673,
    originalPrice: 69900,
    discount: 29,
    sellingPrice: 49499
};

