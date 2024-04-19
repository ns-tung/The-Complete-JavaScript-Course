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

/* some() AND every() ==================================================

    The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise, it returns false. It doesn't modify the array.

    The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/

// EQUALITY
console.log(movements.includes(-130)); // true

// SOME: CONDITION
console.log(movements.some(mov => mov === -130)); // true

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // true

// EVERY
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // ▶ (5) [200, 450, 3000, 70, 1300]

/* flat() AND flatMap() ==================================================

    Introduced on ES2019

    The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    The flatMap() method of Array instances returns a new array formed by applying a given callback function to each array element and then flattening the result by ONE LEVEL. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

*/

const arrNum = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrNum.flat()); // ▶ (8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1)); // ▶ (6) [[1, 2], 3, 4, [5, 6], 7, 8]
console.log(arrDeep.flat(2)); // ▶ (8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrSoDeep = [0, 1, [2, [3, [4, [5, [6, 7, [8]]]]]]];
console.log(arrSoDeep.flat(Infinity)); // ▶ (8) [1, 2, 3, 4, 5, 6, 7, 8]

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap -> flattening the result by ONE LEVEL
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

/* SORTING ARRAYS ==================================================

    The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, which is now sorted. The default sort order is ascending, built upon converting the elements into strings and comparing their UTF-16 code unit value sequences.

    The sort() method does mutate the original array. To sort the elements in an array without mutating the original array, use toSorted().

    Syntax:
      sort() -> covert to string and sorting
      sort(compareFn) -> resultOfCompareFn(a, b) < 0 => a, b
      sort(compareFn) -> resultOfCompareFn(a, b) > 0 => b, a

    Ascending order: (a, b) => a - b
    Descending order: (a, b) => b - a

*/

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // ▶ (4) ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners); // ▶ (4) ['Adam', 'Jonas', 'Martha', 'Zach']

// Numbers
console.log(movements);

// return < 0 => A, B (keep order)
// return > 0 => B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

/* MORE WAYS OF CREATING AND FILLING ARRAYS ==================================================

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

const arrNumber = [1, 2, 3, 4, 5, 6, 7]; // ▶ (7) [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // ▶ (7) [1, 2, 3, 4, 5, 6, 7]

// Empty arrays + fill method
const x = new Array(7);
console.log(x); // ▶ (7) [empty × 7]
x.fill(1, 3, 5);
console.log(x); // ▶ (7) [empty × 3, 1, 1, empty × 2]

arr.fill(23, 2, 6);
console.log(arr); // ▶ (3) [23, 11, 23]

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // ▶ (7) [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // (7) [1, 2, 3, 4, 5, 6, 7]

const diceArr = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));
console.log('Arrays of 100 rolls of dice:\n', diceArr);

const diceRolls = Array.from({ length: 100 }, () => {
  let roll = 0;
  do roll = Math.trunc(Math.random() * 6 + 1); while (roll === 1);
  return roll;
});
console.log('Arrays of 100 rolls of dice without 1:\n', diceRolls);

const items = document.querySelectorAll('.item');
const itemArrays = Array.from(items, item => item.innerText.replaceAll('\n', ' ').replaceAll(' ,', ','));
console.log('Section content:\n', itemArrays);

/* WHICH ARRAY METHOD TO USE? 🤔 ==================================================

    💠 To mutate original array
      👉 Add to original: .push() – end, .unshift() – start
      👉 Remove from original: .pop() – end, .shift() – start, .splice() – any
      👉 Others: reverse(), sort(), fill()

    💠 A new array
      👉 Computed from original: .map() – loop
      👉 Filtered using condition: .filter()
      👉 Portion of original: .slice()
      👉 Adding original to other: .concat()
      👉 Flattening the original: .flat(), .flatMap()

    💠 An array index
      👉 Based on value: .indexOf()
      👉 Based on test condition: .findIndex()

    💠 An array element
      👉 Based on test condition: .find()

    💠 Know if array includes
      👉 Based on value: .includes()
      👉 Based on test condition: .some(), .every()

    💠 A new string
      👉 Based on separator string: .join()

    💠 To transform to value
      👉 Based on accumulator: .reduce() – (Boil down array to single value of any type: number, string, boolean, or even new array or object)

    💠 To just loop array
      👉 Based on callback: .forEach() – (Does not create a new array, just loops over it)

*/

/* ARRAY METHODS PRACTICE ==================================================
*/

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum); // 25180

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000); // 6

// Prefixed ++ operator
let a = 10;
console.log(++a); // 11
console.log(a); // 11

// 3.
const { deposits: accDeposits, withdrawals: accWithdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(accDeposits, accWithdrawals); // 25180 -7340

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  // const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const capitalize = str => str.replace(str[0], str[0].toUpperCase());

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title')); // This Is a Nice Title
console.log(convertTitleCase('this is a LONG title but not too long')); // This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with an EXAMPLE')); // And Here Is Another Title with an Example