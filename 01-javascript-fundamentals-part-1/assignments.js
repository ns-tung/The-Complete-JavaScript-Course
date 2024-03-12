// VALUES AND VARIABLES
// 1. Declare variables called country, continent and population and assign their values according to your own country(population in millions).
// 2. Log their values to the console.

// let country = "Viet Nam";
// let continent = "Asia";
// let population = 100; // in millions
// console.log(country);
// console.log(continent);
// console.log(population);

// DATA TYPES
// 1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// 2. Log the types of isIsland, population, country and language to the console.

// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// LET, CONSTANT & VAR
// 1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3.Try to change one of the changed variables now, and observe what happens.

let language;
language = "Vietnamese";
const country = "Viet Nam";
const continent = "Asia";
const isIsland = false;
// isIsland = true;

// BASIC OPERATORS
// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console.
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 4. The average population of a country is 33 million people. Does you country have less people than the average country?
// 5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

let population = 100;
console.log(population / 2);
population++;
console.log(population);

let populationFinland = 6;
console.log(population > populationFinland);

let averagePopulation = 33;
console.log(population < averagePopulation);

const description = country + " is in " + continent + ", and its " + population + " millions people speak " + language;
console.log(description);

/*

Coding Exercise 1: CHALLENGE #1

Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
  BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
  1. Store Mark's and John's mass and height in variables
  2. Calculate both their BMIs using the formula (you can even implement both versions)
  3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
  Data 1: Marks weights 78kg and is 1.69m tall.John weights 92kg and is 1.95m tall.
  Data 2: Marks weights 95kg and is 1.88m tall.John weights 85kg and is 1.76m tall

*/

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
// const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn * heightJohn);
// const bmiJohn = massJohn / (heightJohn ** 2);

console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);