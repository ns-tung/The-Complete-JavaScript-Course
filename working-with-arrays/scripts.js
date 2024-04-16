'use strict';

/* SIMPLE ARRAY METHODS ==================================================

    slice(), splice(), reverse(), concat(), join()

*/

let arrOne = ['a', 'b', 'c', 'd', 'e'];

// SLICE -> DOESN'T MUTATES the original array
console.log(arrOne.slice(2)); // ▶ (3) ['c', 'd', 'e']
console.log(arrOne.slice(2, 4)); // ▶ (2) ['c', 'd']
console.log(arrOne.slice(-2)); // ▶ (2) ['d', 'e']
console.log(arrOne.slice(-1)); // ▶ ['e']
console.log(arrOne.slice(1, -2)); // ▶ (2) ['b', 'c']
console.log(arrOne.slice()); // ▶ (5) ['a', 'b', 'c', 'd', 'e'] -> sallow copy
console.log([...arrOne]); // ▶ (5) ['a', 'b', 'c', 'd', 'e'] -> sallow copy

// SPLICE -> MUTATES the original array
arrOne.splice(-1);
console.log(arrOne); // ▶ (4) ['a', 'b', 'c', 'd']
arrOne.splice(1, 2);
console.log(arrOne); // ▶ (2) ['a', 'd']

// REVERSE -> MUTATES the original array
arrOne = ['a', 'b', 'c', 'd', 'e'];
const arrTwo = ['j', 'i', 'h', 'g', 'f'];
console.log(arrTwo.reverse()); // ▶ (5) ['f', 'g', 'h', 'i', 'j']
console.log(arrTwo); // ▶ (5) ['f', 'g', 'h', 'i', 'j']

// CONCAT -> DOESN'T MUTATES any of the involved arrays
const letters = arrOne.concat(arrTwo);
console.log(letters); // ▶ (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arrOne, ...arrTwo]); // ▶ (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN -> DOESN'T MUTATES any of the involved arrays
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

/* THE NEW AT() METHOD ==================================================

    Introduced on ES2020

*/
const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// getting last array element
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64

console.log('jonas'.at(0)); // j
console.log('jonas'.at(-1)); // s

/* LOOPING ARRAYS: forEach() ==================================================

    Can not use 'continue' and 'break' keywords in forEach loop

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-of loop
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// forEach loop
console.log('––––– FOREACH –––––');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
  // console.log(arr);
});