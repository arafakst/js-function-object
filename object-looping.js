
var shoppingItems = ['books', 'sunglass','shes','pen'];
var friendsAge = [23, 25, 24, 26,78];

var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jalam: 37,
    robi: 32, 
    kazi: 14,
}

var shoppingCart = {
    books: 3,
    sunglass: 6,
    mouse: 2,
    keyboard: 1,
    pen:26,
    shoes: 4,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for(var i = 0; i < keys.length; i++){
    var propertyNane = keys[i];
    var propertyValue = shoppingCart[propertyNane];
    // console.log(propertyNane);
    console.log(propertyNane, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}