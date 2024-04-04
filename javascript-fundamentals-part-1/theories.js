let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Tung Nguyen");
console.log(34);

/* VALUES AND VARIABLES ==================================================

    💠 Conventions and rules for naming variables:
      👉 Should be only using "camelCase", ex: first, firstName, firstNamePerson
      👉 Should not start with an uppercase, ex: Person (this is a convention, this naming will used for constants and in OOP programming)

    💠 TWO SYMBOLS are ALLOWED when naming variables: "_" and "$", besides LETTERS and NUMBERS.

    💠 Do not name a variable with a start number.

    💠 Should not use the keyword: "name" when declaring a variable (this is a convention, although it is legal), also keywords of javascript: new, function, ...
*/

let 3years; // ILLEGAL: start with number
let jonas& matilda; // ILLEGAL: & is a illegal symbol
let new; // ILLEGAL: using the keyword of javascript
let function; // ILLEGAL: using the keyword of javascript

let firstName = "Tung"; // 👍
let lastName = "Nguyen"; // 👍
console.log(firstName); // Tung
console.log(firstName); // Tung
console.log(firstName); // Tung

let tung_nguyen = "TN";
let $function = "34";

// Should be:
let myFirstJob = "Technician"; // 👍 clearly
let myCurrentJob = "Freelancer"; // 👍 clearly

// Should not:
let job1 = "Technician"; // 🚫 confusing
let job2 = "Freelancer"; // 🚫 confusing

/* DATA TYPES ==================================================

    💠 7 primitive data types: number, string, boolean, undefined, null, symbol (es2015), bigint (es2020).

    💠 Dynamic typing: you do not need to define the data type when creating a variable.

    💠 The value (of the variable) has a type, not the variable. A variable only stores values that have a type.
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 34);
console.log(typeof "Tung");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null); // -> object (should be return null), this is regarded as a buck or an error in JavaScript.

/* LET, CONSTANT & VAR ==================================================

    💠 Always use CONST for declaring variables as much as possible
        👉 const does not allow reassigning value
        👉 const does not allow declaring without value

    💠 Only use LET when you are sure that the variable needs to change

    💠 Never use VAR to declare a variable, and should not declare a variable without keywords CONST or LET
*/

let age = 30;
age = 34;

const birthYear = 1990; // 👍
birthYear = 1992;// 👆 🚫 ILLEGAL, const does not allowed reassign value
const job; // 🚫 ILLEGAL, const does not have a value


var job = "programmer"; // 🚫 should not use var to declare a variable anymore, although it is legal
job = "freelancer";

lastName = "Nguyen"; // 🚫 should not do this
console.log(lastName);

/* BASIC OPERATORS ==================================================

    💠 Reference more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

    💠 Comparison operators: >, <, >=, <=
*/

const now = 2034;
const ageTung = now - 1990;
const ageJonas = now - 1991;
console.log(ageTung, ageJonas);

// 2 ** 3 means: 2 to the power of 3 => 2^3 = 2 * 2 * 2
console.log(ageTung * 2, ageTung / 10, 2 ** 3);

const firstName = "Tung";
const lastName = "Nguyen";
console.log(firstName + " " + lastName); // Tung Nguyen

let x = 10 + 5; // 15
x += 10; // x = x + 10 -> 25
x *= 4; // x = x * 4 -> 100
x++; // x = x + 1 -> 101
x--; // x = x - 1 -> 100
console.log(x); // 100

// Comparison
console.log(ageTung > ageJonas);
console.log(ageJonas >= 20);
console.log(now - 1990 > now - 1991);

/* OPERATOR PRECEDENCE ==================================================

    💠 Reference more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
*/

const now = 2034;
const ageTung = now - 1990;
const ageJonas = now - 1991;

console.log(now - 1990 > now - 1991); // true

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // 10 10

const averageAge = (ageTung + ageJonas) / 2;
console.log(ageTung, ageJonas, averageAge); // 44 43 43.5

/* STRINGS AND TEMPLATE LITERALS ==================================================

    💠 Reference more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

const firstName = "Tung";
const job = "developer";
const birthYear = 1990;
const year = 2034;

const tung = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(tung);

const tungNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(tungNew);

console.log(`Just a regular string ...`);

console.log("String\nmultiple\nlines");
console.log("String\n" + "multiple\n" + "lines");
console.log("String\n\
multiple\n\
lines");

console.log(`String
multiple
lines`);

/* TAKING DECISIONS: IF/ELSE STATEMENTS ==================================================

    💠 A if/else statement is called a control structure.

    💠 The if/else statement executes a statement IF a specified condition is truthy (type coercion). If the condition is falsy (type coercion), another statement in the optional ELSE clause will be executed.
*/
const age = 16;

if (age >= 18) {
  console.log(`You can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years 😀`);
}

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/* TYPE CONVERSION AND COERCION ==================================================

    💠 Type conversion: javascript can only be supported to convert a data type to one of three types: number, string, boolean.

    💠 Type coercion happens when an operator deals with two values of different types.
*/

// Type conversion
const inputYear = "1990";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Tung"));
console.log(typeof NaN); // number -> this is a legacy bug

console.log(String(34), 34);

// Type coercion
console.log("I'm " + 34 + " years old"); // I'm 34 years old
console.log("34" - "10" - 4); // 20
console.log("34" + "10" + 4); // "34104"
console.log("34" * "2"); // 68
console.log("34" / "2"); // 17

let n = "1" + 1; // "11"
n = n - 1;
console.log(n); // 10

/* TRUTHY AND FALSY VALUES ==================================================

    💠 Five falsy values: 0, "" (the empty string), undefined, null, NaN.

    💠 Falsy values are not precisely false but will become false when we try to convert them into a boolean.

    💠 Everything else (does not belong to the five falsy values above) will be called truthy values.

    💠 Both truthy and falsy values are called types of coercion.
*/

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean({})); // true
console.log(Boolean(10)); // true
console.log(Boolean("Tung")); // true

const money = 100;
if (money) { // => Boolean(money) -> true
  console.log("Do not spend it all 😉");
} else {
  console.log("You should get a job 😀");
}

// 🚨 Attention!

let height = 0; // This is a DEFINED variable, and it equals zero 👇
if (height) { // And here, javascript does Boolean type coercion -> false => this makes the unexpected result -> "Height is UNDEFINED!"
  console.log("YAY! Height is DEFINED!");
} else {
  console.log("Height is UNDEFINED!");
}

/* EQUALITY OPERATORS: "==" VS. "===" //////////////////////////////////////////////////

    💠 General rule: avoid using the loose equality operator "==" as much as you can, and use the strict equality operator "===" instead.
*/
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

/* BOOLEAN LOGIC: AND, OR, NOT ==================================================

    💠 AND: will are true when ALL of them are true
    
    |  AND  | TRUE  | FALSE |
    |–––––––|–––––––|–––––––|
    | TRUE  | true  | false |
    |–––––––|–––––––|–––––––|
    | FALSE | false | false |

    💠 OR: will are true when ONE of them is true

    |  OR   | TRUE  | FALSE |
    |–––––––|–––––––|–––––––|
    | TRUE  | true  | true  |
    |–––––––|–––––––|–––––––|
    | FALSE | true  | false |

    💠 NOT: will invert true/false value.
*/

/* LOGICAL OPERATORS ==================================================

    💠 Logical operators: && (AND), || (OR), ! (NOT)

    💠 In modern code, you can use the Nullish coalescing operator (??), which works like (||) but only returns the second expression when the first one is "null" or "undefined". It is thus the better alternative to provide defaults when values like "" or 0 are valid values for the first expression, too. Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

    💠 It is not possible to combine both the AND (&&) and OR (||) operators directly with ??.
*/

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("You are able to drive!");
} else {
  console.log("Someone else should drive ...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive!");
} else {
  console.log("Someone else should drive ...");
}

// Nullish coalescing operator ??
const nullCase = null ?? "default string for null case";
console.log(nullCase); // default string for null case

const undefinedCase = undefined ?? "default string for undefined case";
console.log(undefinedCase); // default string for undefined case

const defaultNum = 0 ?? 34;
console.log(defaultNum); // 0

let undefinedAge; // -> undefined
const old = undefinedAge ?? 42;
console.log(old); // 42

null || undefined ?? "foo"; // 🚫 raises a SyntaxError
true && undefined ?? "foo"; // 🚫 raises a SyntaxError

/* THE SWITCH STATEMENT ==================================================

    💠 The SWITCH statement evaluates an expression, matching the expression's value against a series of CASE clauses, and executes statements after the first CASE clause with a matching value until a BREAK statement is encountered. The DEFAULT clause of a SWITCH statement will be jumped to if no CASE matches the expression's value.
*/

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

/* STATEMENTS AND EXPRESSIONS ==================================================

    💠 An expression is a bit of JavaScript code that produces a value. And expressions can contain expressions.

    💠 A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.
    
    💠 Statements often have "slots" for expressions. We can put any expression we like into those slots.
    
    💠 Reference:
      👉  https://www.joshwcomeau.com/javascript/statements-vs-expressions/
      👉  https://www.freecodecamp.org/news/statement-vs-expression-whats-the-difference-in-programming/
*/

// Expressions
1; // -> 1
"hello"; // -> "hello"
5 * 10; // -> 50
(5 + 1) * 2; // -> 12
num > 100; // -> either true or false
isHappy ? "🙂" : "🙁"; // -> an emoji
[1, 2, 3].pop(); // -> the number 3

// Statements
let hi = 5;
if (hi > 10) {
  ...
}
throw new Error('Something exploded!');

// Statements often have "slots" for expressions.
let hi = 1;
let hi = "hello";
let hi = 5 * 10;
let hi = num > 100;
let hi = isHappy ? "🙂" : "🙁";
let hi = [1, 2, 3].pop();

/* THE CONDITIONAL (TERNARY) OPERATOR ==================================================

    💠 The conditional(ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark(?), then an expression to execute if the condition is truthy followed by a colon(:), and finally, the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if/else statement.
*/

const age = 34;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let _drink;
if (age >= 18) {
  _drink = "wine 🍷";
} else {
  _drink = "water 💧";
}
console.log(_drink);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water 💧"}`);

/* JAVASCRIPT RELEASES: ES5, ES6+ AND ESNEXT ==================================================

  A BRIEF HISTORY OF JAVASCRIPT:

        1995 👉 Brendan Eich creates the very first version of JavaScript in just 10 days.It was called Mocha, but already had many fundamental features of modern JavaScript!

        1996 👉 Mocha changes to LiveScript and then to JavaScript, in order to attract Java developers. However, JavaScript has almost nothing to do with Java ☝
             👉 Microsoft launches IE, copying JavaScript from Netscape and calling it JScript;

        1997 👉 With a need to standardize the language, ECMA releases ECMAScript 1(ES1), the first official standard for JavaScript(ECMAScript is the standard, JavaScript the language in practice);

        2009 👉 ES5 (ECMAScript 5) is released with lots of great new features;

        2015 👉 ES6/ES2015 (ECMAScript 2015) was released: the biggest update to the language ever!
             👉 ECMAScript changes to an annual release cycle in order to ship less features per update 🙏

    2016 – ∞ 👉 Release of ES2016 / ES2017 / ES2018 / ES2019 / ES2020 / ES2021 / ... / ES2089 😅

  BACKWARDS COMPATIBILITY (DON’T BREAK THE WEB!), NOT FORWARDS COMPATIBLE:

             👉 Old features are never removed;
             👉 Not really new versions, just incremental updates (releases)
             👉 Websites keep working forever!
  
  HOW TO USE MODERN JAVASCRIPT TODAY:

    💻 During development: Simply use the latest Google Chrome!

    🚀 During production: Use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users).

         ES5 👉 Fully supported in all browsers (down to IE 9 from 2011);
             👉 Ready to be used today 👍

  ES6/ES2015 👉 ES6+: Well supported in all modern browsers;
      ↓      👉 No support in older browsers;
    ES2020   👉 Can use most features in production with transpiling and poly-filling 😃

  ES2021 – ∞ 👉 ESNext: Future versions of the language (new feature proposals that reach Stage 4);
             👉 Can already use some features in production with transpiling and poly-filling.
  
  MODERN JAVASCRIPT FROM THE BEGINNING?

    🔥 Learn modern JavaScript from the beginning!
    👆 But, also learn how some things were done before modern JavaScript (e.g., const & let vs. var and function constructors vs. ES6 class).

    3 reasons why we should not forget the Good Ol’ JavaScript:

             👉 You will better understand how JavaScript actually works;
             👉 Many tutorials and code you find online today are still in ES5;
             👉 When working on old code-bases, these will be written in ES5.
*/