/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Tung Nguyen");
console.log(34);

// VALUES AND VARIABLES

let firstName = "Tung";
let lastName = "Nguyen";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let tung_nguyen = "TN";
let $function = "34";

// Conventions and rules for naming variables:
//  should be only using "camelCase", ex: first, firstName, firstNamePerson
//  should not start with an uppercase, ex: Person (this is a convention, this naming will used for constants and OOP)

// TWO SYMBOLS are ALLOWED when naming variables: "_" and "$", besides LETTERS and NUMBERS.

// Illegal variables name:
//  start with number: 3years
//  jonas&matilda (& is a illegal symbol)
//  using keywords: new, function

// Should not using keyword: name (conventions)

// Should be:
let myFirstJob = "Technician";
let myCurrentJob = "Freelancer";

// Should not:
let job1 = "Technician";
let job2 = "Freelancer";

// Practice Assignments:
// 1. Declare variables called country, continent and population and assign their values according to your own country(population in millions).
// 2. Log their values to the console.

let country = "Viet Nam";
let continent = "Asia";
let population = "100"; // in millions
console.log(country);
console.log(continent);
console.log(population);

// DATA TYPES

// 7 primitive data types: number, string, boolean, undefined, null, symbol (es2015), bigint (es2020)

// Dynamic typing: you do not need to define the data type when creating a variable.
// The value (of the variable) has a type, not the variable. A variable only stores values that have a type.

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 34);
// console.log(typeof "Tung");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null); // -> object (should return null), this is regarded as a buck or an error in JavaScript.

// LET, CONSTANT & VAR

// use let only when you are really sure that the variable needs to change
let age = 30;
age = 34;

// always use const for declaring variables as much as possible
const birthYear = 1990;
// birthYear = 1992; illegal, do not allowed reassign value
// const job; illegal, does not have a value

// never user var for declare a variable
var job = "programmer";
job = "freelancer";

// should not do this:
lastName = "Nguyen";
console.log(lastName);

// BASIC OPERATORS

const now = 2034;
const ageTung = now - 1990;
const ageJonas = now - 1991;
console.log(ageTung, ageJonas);

// 2 ** 3 means: 2 to the power of 3 => 2^3 = 2 * 2 * 2
console.log(ageTung * 2, ageTung / 10, 2 ** 3);

const firstName = "Tung";
const lastName = "Nguyen";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x +1
x--;
x--;
console.log(x);

// Comparison operators: >, <, >=, <=
console.log(ageTung > ageJonas);
console.log(ageJonas >= 20);

console.log(now - 1990 > now - 1991);
*/

// OPERATOR PRECEDENCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

const now = 2034;
const ageTung = now - 1990;
const ageJonas = now - 1991;

console.log(now - 1990 > now - 1991);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageTung + ageJonas) / 2;
console.log(ageTung, ageJonas, averageAge);