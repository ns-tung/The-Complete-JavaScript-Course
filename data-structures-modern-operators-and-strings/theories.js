'use strict';

/* DESTRUCTURING ARRAYS ==================================================

  Syntax:
    const [a, b] = array;
    const [a, , b] = array;
    const [a = aDefault, b] = array;
    const [a, b, ...rest] = array;
    const [a, , b, ...rest] = array;
    const [a, b, ...{ pop, push }] = array;
    const [a, b, ...[c, d]] = array;
*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`ORDER RECEIVED: "${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}" will be delivered to "${address}" at ${time}.`);
  },
  orderPasta: function (ingOne, ingTwo, ingThree) {
    console.log(`Here is your delicious pasta with ${ingOne}, ${ingTwo} and ${ingThree}.`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  }
};

// Receives two values from a function
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian
[main, secondary] = [secondary, main];
console.log(main, secondary);// Vegetarian Italian

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// Destructuring inside of destructuring – Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

/* DESTRUCTURING OBJECTS ==================================================
    const { a, b } = obj;
    const { a: a1, b: b1 } = obj;
    const { a: a1 = aDefault, b = bDefault } = obj;
    const { a, b, ...rest } = obj;
    const { a: a1, b: b1, ...rest } = obj;
    const { [key]: a } = obj;
*/

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// ▶ {thu: {…}, fri: {…}, sat: {…}} 
// ▶ (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
// ▶ {thu: {…}, fri: {…}, sat: {…}} 
// ▶ (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// ▶ []
// ▶ (4)['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // parentheses are required
console.log(a, b); // 23 7

// Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c); // 11 23

restaurant.orderDelivery({ time: '22:30', address: "Via del Sole, 21", starterIndex: 2, mainIndex: 2 });
// ORDER RECEIVED: "Garlic Bread and Risotto" will be delivered to "Via del Sole, 21" at 22:30.

restaurant.orderDelivery({ address: "Via del Sole, 21", starterIndex: 1 });
// ORDER RECEIVED: "Bruschetta and Pizza" will be delivered to "Via del Sole, 21" at 20:00.

/* THE SPREAD OPERATOR (...) ==================================================

  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

*/

const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
console.log(newArray); // ▶ (5) [1, 2, 7, 8, 9]
console.log(...newArray); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ▶ (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array (sallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menuJoined = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuJoined); // ▶ (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters); // ▶ (7) ['J', 'o', 'n', 'a', 's', '', 'S.']
console.log(...str); // J o n a s

const ingredients = ['mushroom', 'asparagus', 'cheese'];
restaurant.orderPasta(...ingredients); // pass parameters to a function
// Here is your delicious pasta with mushroom, asparagus and cheese.

// Objects
const newRestaurant = { ...restaurant, foundedIn: 1998, founder: 'Guiseppe' };
console.log(newRestaurant);

// Sallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name); // Classico Italiano
console.log(restaurantCopy.name); // Ristorante Roma

/* REST PATTERN AND PARAMETERS ==================================================

  Rest syntax looks exactly like spread syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
*/

// 👉 Destructuring

// SPREAD, because the (...) on the RIGHT side of the assignment operator
const arrNum = [1, 2, ...[3, 4]];
console.log(arrNum); // ▶ (4) [1, 2, 3, 4]

// REST, because the (...) on the LEFT side of the assignment operator
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others); // 1 2 ▶ (3) [3, 4, 5]

const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);
// Pizza Risotto ▶ (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat); // ▶ {open: 0, close: 24}
console.log(weekdays); // ▶ {thu: {…}, fri: {…}}

// 👉 Function (pass parameters)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); // 35

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// mushrooms ▶ (3) ['onion', 'olives', 'spinach']
restaurant.orderPizza('mushrooms');
// mushrooms ▶ []

/* SHORT CIRCUITING && AND || ==================================================

  💠 Use ANY data type, and return ANY data type

*/

// --- OR ----
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// 🚨 Attention!
restaurant.numGuests = 0; // This is a meaningful variable 👇
const guests = restaurant.numGuests || 10; // but this makes the unexpected result
console.log(guests); // 👆 🚫 10 is a wrong result, the result must be 0

// --- AND ----
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'jonas'); // null

// Normal code
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
} // 👉 mushrooms ▶ ['spinach']

// Use short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// 👉 mushrooms ▶ ['spinach']

/* THE NULLISH COALESCING OPERATOR ?? ==================================================

  💠 Introduced in ES2020
  
  💠 Nullish values are NULL and UNDEFINED, NOT are 0 or '' (the empty string)
  
*/

const guest = restaurant.numGuests ?? 10; // fix for 209 of line
console.log(guest); // 0 👍