var shopingCart = {
    book: 3,
    sunglass: 3,
    keybord: 1,
    mouse: 23,
    pen: 89,
    shoes: 39,
}

// var array = [ 'book', 'sunglass', 'keybord', 'mouse', 'pen', 'shoes' ]
const keys = Object.keys(shopingCart);
console.log(keys);

const values = Object.values(shopingCart);
console.log(values);

for (var i = 0; i < keys.length; i++){
    var propertiesName = keys[i];
    var propertiesValues = shopingCart[propertiesName];
    console.log(propertiesName, propertiesValues);
}
