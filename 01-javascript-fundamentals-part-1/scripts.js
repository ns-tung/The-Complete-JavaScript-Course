/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Tung Nguyen");
console.log(34);

// VALUES AND VARIABLES ==================================================

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

// DATA TYPES ==================================================

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

// LET, CONSTANT & VAR ==================================================

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

// BASIC OPERATORS ==================================================

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

// OPERATOR PRECEDENCE ==================================================

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

// STRINGS AND TEMPLATE LITERALS ==================================================

const firstName = "Tung";
const job = "developer";
const birthYear = 1990;
const year = 2034;

const tung = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(tung);

const tungNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(tungNew);

console.log(`Just a regular string ...`);

console.log("String \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

// TAKING DECISIONS: IF / ELSE STATEMENTS ==================================================

const age = 16;

if (age >= 18) {
  console.log(`You can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years 😀`);
}

// A if / else statement is called a control structure.

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// TYPE CONVERSION AND COERCION ==================================================

// Type conversion: Javascript can only can covert to three types: number, string, boolean

const inputYear = "1990";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Tung"));
console.log(typeof NaN); // number -> a legacy bug

console.log(String(34), 34);

// Type coercion happens when an operator deals with two values of different types.

console.log("I'm " + 34 + " years old"); // I'm 34 years old
console.log("34" - "10" - 4); // 20
console.log("34" + "10" + 4); // "34104"
console.log("34" * "2"); // 68
console.log("34" / "2"); // 17

let n = "1" + 1; // "11"
n = n - 1;
console.log(n); // 10

// TRUTHY AND FALSY VALUES ==================================================

  // Falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean. Five falsy values: 0, '', undefined, null, NaN

  // Everything else will be called truthy values.

  // Both truthy and falsy values are called types of coercion.

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean({})); // true
console.log(Boolean(10)); // true
console.log(Boolean("Tung")); // true

const money = 100;
if (money) { // => Boolean(money) -> false
  console.log("Do not spend it all 😉");
} else {
  console.log("You should get a job 😀");
}

// Attention 👇

let height = 0; // This is a DEFINED variable, and it equals zero 👇
if (height) { // And here, javascript does Boolean type coercion -> false => this makes the unexpected result -> "Height is UNDEFINED!"
  console.log("YAY! Height is DEFINED!");
} else {
  console.log("Height is UNDEFINED!");
}

// EQUALITY OPERATORS: == VS. ===
// ==================================================
// General rule: avoid using the loose equality operator "==" as much as you can, and use the strict equality operator "===" instead.
const age = "18";
if (age === 18) console.log("You just became an adult 😀 (strict)");
if (age == 18) console.log("You just became an adult 😀 (loose)");

const favorite = Number(prompt("Input your favorite number!"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 34) {
  console.log("Cool, 34 is amazing number!");
} else if (favorite === 6) {
  console.log("6 is also a cool number!");
} else if (favorite === 8) {
  console.log("8 is also a cool number!");
} else {
  console.log("Number is not 34 or 6 or 8");
}

if (favorite !== 34) console.log("Why not 34?");

// BOOLEAN LOGIC: AND, OR, NOT ==================================================

// AND: will are true when ALL of them are true

// |  AND  | TRUE  | FALSE |
// | ----- | ----- | ----- |
// | TRUE  | true  | false |
// | FALSE | false | false |

// OR: will are true when ONE of them is true

// |  OR   | TRUE  | FALSE |
// | ----- | ----- | ----- |
// | TRUE  | true  | true  |
// | FALSE | true  | false |

// NOT: will invert true/false value.

// LOGICAL OPERATORS ==================================================

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("You are able to drive!");
// } else {
//   console.log("Someone else should drive ...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive!");
} else {
  console.log("Someone else should drive ...");
}

// THE SWITCH STATEMENT ==================================================

const day = "sunday";

switch (day) {
  case "monday":
    console.log("Plan code structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😀");
    break;
  default: console.log("Not a valid day!");
    break;
}

if (day === "monday") {
  console.log("Plan code structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😀");
} else {
  console.log("Not a valid day!");
}
*/

// STATEMENTS AND EXPRESSIONS ==================================================

// An expression is a bit of JavaScript code that produces a value. And expressions can contain expressions. 

// 1 -> 1
// "hello" -> "hello"
// 5 * 10 -> 50
// (5 + 1) * 2 -> 12
// num > 100 -> either true or false
// isHappy ? "🙂" : "🙁" -> an emoji
// [1, 2, 3].pop() -> the number 3

// A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

// let hi = 5;
// if (hi > 10) {
//  More statements here
// }
// throw new Error('Something exploded!');

// Statements often have "slots" for expressions. We can put any expression we like into those slots.

// let hi = 1;
// let hi = "hello";
// let hi = 5 * 10;
// let hi = num > 100;
// let hi = isHappy ? "🙂" : "🙁";
// let hi = [1, 2, 3].pop();

// Read more:
//  https://www.freecodecamp.org/news/statement-vs-expression-whats-the-difference-in-programming/
//  https://www.joshwcomeau.com/javascript/statements-vs-expressions/