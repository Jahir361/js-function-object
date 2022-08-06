var shopingCart = {
    book: 3,
    sunglass: 3,
    keybord: 1,
    mouse: 23,
    pen: 89
}

// wen you know spicifice propeti name 
var penCount = shopingCart.pen;
var penCount2 = shopingCart['pen'];

var propertiesName = 'mouse';
var propertiesValues = shopingCart[propertiesName];
// console.log(propertiesName,propertiesValues);

var properties = Object.keys(shopingCart);
var propertiesValues = Object.values(shopingCart);
// console.log(properties);
// console.log(propertiesValues);
// console.log(shopingCart);


// set property value
shopingCart.mouse =23;
console.log(shopingCart);
shopingCart['mouse'] = 34;
console.log(shopingCart);
shopingCart[propertiesName] = 30;
console.log(shopingCart);