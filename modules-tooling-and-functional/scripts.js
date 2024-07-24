console.log('Imported module.');

// import name
import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';
addToCart('bread', 10);
console.log(price, quantity);

// import all
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.quantity);

// mix import
import addTo, { cart } from './shoppingCart.js'; // addTo() is from export default
addTo('banana', 10)
console.log(price);

// import from export default
import add from './shoppingCart.js'; // add() is from export default
add('bread', 5);
add('pizza', 4);
add('apple', 2);

console.log(cart);