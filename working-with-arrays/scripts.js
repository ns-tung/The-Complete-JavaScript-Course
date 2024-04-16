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

/* forEach() WITH MAPS AND SETS ==================================================

*/

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(map);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
  console.log(set);
});

/* CODING CHALLENGE #1 ==================================================

    Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

    YOUR TASKS:

    Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

    1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

    2. Create an array with both Julia's (corrected) and Kate's data

    3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

    4. Run the function for both test datasets

    HINT: Use tools from all lectures in this section so far 😉

    TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
    TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

const juliaOne = [3, 5, 2, 12, 7];
const kateOne = [4, 1, 15, 8, 3];
const juliaTwo = [9, 16, 6, 8, 3];
const kateTwo = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsOfJulia = dogsJulia.slice();
  dogsOfJulia.splice(0, 1);
  dogsOfJulia.splice(-2);

  const dogs = dogsOfJulia.concat(dogsKate);

  dogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and it is ${age} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶.`);
    }
  })
}

checkDogs(juliaOne, kateOne);
checkDogs(juliaTwo, kateTwo);