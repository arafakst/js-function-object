var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 5,
    pen: 25,

}

//when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
//alternative system
//when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['keyboard'];

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);


// Set Property Values
shoppingCart.mouse = 15;

shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
