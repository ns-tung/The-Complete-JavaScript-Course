'use strict';

/* CONVERTING AND CHECKING NUMBERS ==================================================
*/

console.log(23 === 23.0); // true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23')); // 23
console.log(+'23'); // 23

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

/* MATH AND ROUNDING ==================================================

    .sqrt(), max(), min(), .PI, .random(), .trunc(), .round(), .ceil(), .floor()

*/

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// Rounding integers
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
// toFixed() does not do type coercion
console.log((2.7).toFixed(0)); // 3 -> string
console.log((2.7).toFixed(3)); // 2.700 -> string
console.log((2.345).toFixed(2)); // 2.35 -> string
console.log(+(2.345).toFixed(2)); // 2.35 -> number