"use strict";

/* FUNCTIONS ==================================================
    
    1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

    2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.  
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeVietnam = describeCountry("Vietnam", "100", "Hanoi");
const describeFinland = describeCountry("Finland", "6", "Helsinki");
const describePortugal = describeCountry("Portugal", "10", "Lisbon");
console.log(describeVietnam + "\n\n" + describeFinland + "\n\n" + describePortugal);

/* FUNCTION DECLARATIONS VS. EXPRESSIONS ==================================================

    1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

    2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

    3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

    4. Create a function expression which does the exact same thing, called percentageOfWorld2, and also call it with 3 country populations (can be the same populations).
*/

function percentageOfWorld1(populations) {
  return populations / 7900 * 100;
}

const percentageOfWorld2 = function (populations) {
  return populations / 7900 * 100;
}

const percentageOfFinland1 = percentageOfWorld1(6);
const percentageOfVietnam1 = percentageOfWorld1(100);
const percentageOfPortugal1 = percentageOfWorld1(10);
console.log(percentageOfVietnam1 + "\n" + percentageOfFinland1 + "\n" + percentageOfPortugal1);

const percentageOfFinland2 = percentageOfWorld2(6);
const percentageOfVietnam2 = percentageOfWorld2(100);
const percentageOfPortugal2 = percentageOfWorld2(10);
console.log(percentageOfVietnam2 + "\n" + percentageOfFinland2 + "\n" + percentageOfPortugal2);

/* ARROW FUNCTIONS ==================================================

    Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
*/

const percentageOfWorld3 = populations => populations / 7900 * 100;

const percentageOfFinland3 = percentageOfWorld3(6);
const percentageOfVietnam3 = percentageOfWorld3(100);
const percentageOfPortugal3 = percentageOfWorld3(10);
console.log(percentageOfVietnam3 + "\n" + percentageOfFinland3 + "\n" + percentageOfPortugal3);