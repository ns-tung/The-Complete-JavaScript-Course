'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// Pure function
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (state, limits, value, description, user = 'jonas') {
  const userToLowerCase = user.toLowerCase();
  return (value <= getLimit(limits, userToLowerCase)) ?
    [...state, { value: -value, description, user: userToLowerCase }] : state;
};

const budgetOne = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const budgetTwo = addExpense(budgetOne, spendingLimits, 100, 'Movies 🍿', 'Matilda');
const budgetThree = addExpense(budgetTwo, spendingLimits, 200, 'Stuff', 'Jay');

// Pure function
// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user) ?
//       { ...entry, flag: 'limit 🚩' } : entry
//   });
// };

const checkExpenses = (state, limits) => state.map(entry =>
  entry.value < -getLimit(limits, entry.user) ?
    { ...entry, flag: 'limit 🚩' } : entry
);

const finalBudget = checkExpenses(budgetThree, spendingLimits);
console.log(finalBudget);

// Impure function: because the console.log() inside the function needs to make a side effect
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit).map(entry => entry.description.slice(-2)).join(' / ');
  // const bigExpenses = state.filter(entry => entry.value <= -bigLimit).reduce((str, cur) => `${str === '' ? '' : str + ' /'} ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);
};

logBigExpenses(budget, 500);