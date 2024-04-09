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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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