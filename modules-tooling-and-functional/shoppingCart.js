console.log('Exported module.');

// name export
const shoppingCost = 10;
export const cart = [];

// name export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`)
}

const totalPrice = 234;
const totalQuantity = 23;
// name export
export { totalPrice, totalQuantity as quantity };

// default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`)
}