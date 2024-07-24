/* Exporting and Importing in ES6 Modules ================================================== */

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

/* Top - Level await (ES2022) ==================================================

  You can use the await keyword on its own (outside of an async function) at the top level of a module. This means that modules with child modules that use await will wait for them to execute before they run, all while not blocking other child modules from loading.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
*/

const users = 'https://jsonplaceholder.typicode.com/users';

const getUser = async function (url) {
  const res = await fetch(url);
  const data = await res.json(); console.log(data.at(-2))
  return { userName: data.at(4).name, userEmail: data.at(4).email };
}

const uData = getUser(users); // receive a promise from async function
console.log(uData);

const userData = await getUser(users); // top level await
console.log(userData.userName, userData.userEmail);