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
*/

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