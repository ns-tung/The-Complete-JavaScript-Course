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

/* DATA TRANSFORMATIONS: map(), filter() AND reduce() METHODS ==================================================

  💠 map() returns a new array containing the results of applying an operation on all original array elements

  💠 filter() returns a new array containing the array elements that passed a specified test condition

  💠 reduce() boils (“reduces”) all array elements down to one single value (e.g. adding all elements together)

  All map(), filter(), and reduce() don't mutate the original array.

*/

// ––– The map() method –––
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

// ––– The filter() method –––
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// ––– The reduce() method –––
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 1);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce(
  (acc, mov) => { if (acc > mov) return acc; else return mov; }, movements[0]
);
console.log(max);

/* CHAINING OF METHODS ==================================================

    💠 We should use chaining sparingly because chaining many methods can cause performance issues if we have massive arrays. So if we have many chaining methods, chained one after the other, we should compress all the functionality they do into as few methods as possible.

    💠 Don't use chaining with methods that mutate the original array. For example: splice(), reverse()

*/

// THE CHAINING <-> PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

/* THE find() METHOD ==================================================

    The find() method of Array instances returns the first element in the provided array that satisfies the testing function. If no values satisfy the testing function, undefined is returned.

*/

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

/* THE findIndex() METHOD ==================================================

    The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

*/

const index = accounts.findIndex(acc => acc.owner === 'Sarah Smith');
const indexTung = accounts.findIndex(acc => acc.owner === 'Tung');
console.log(index, indexTung); // 3 -1