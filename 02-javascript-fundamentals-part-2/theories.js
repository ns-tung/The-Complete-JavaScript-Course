/* ACTIVATING STRICT MODE ==================================================

    💠 JavaScript's strict mode is a way to opt into a restricted variant of JavaScript, thereby implicitly opting out of "sloppy mode". Strict mode isn't just a subset: it intentionally has semantics different from regular code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict and non-strict mode codes can coexist so scripts can opt into strict mode incrementally.

    💠 Strict mode makes several changes to standard JavaScript semantics:

      👉 Eliminates some JavaScript silent errors by changing them to throw errors.

      👉 Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

      👉 It prohibits some syntax likely to be defined in future versions of ECMAScript.

    💠 Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

"use strict";

const passTest = true;
let hasDriversLicense = false;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("You can drive 😀");

const interface = "Audio"; // 🚫 SyntaxError: Unexpected strict mode reserved word
const private = 34; // 🚫 SyntaxError: Unexpected strict mode reserved word

/* FUNCTIONS ==================================================

    💠 Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure – a set of statements that performs a task or calculates a value. Still, for a procedure to qualify as a function, it should take some input and return an output where there is some apparent relationship between the input and the output. To use a function, you must define it somewhere in the scope you wish to call it.

    💠 Generally speaking, a function is a "subprogram" that can be called by code external (or internal, in the case of recursion) to the function. Like the program, a function comprises a sequence of statements called the function body. Values can be passed to a function as parameters, returning a value.

    💠 In JavaScript, functions are first-class objects because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.
*/

const firstName = "Tung";
function logger() {
  console.log(`My name is ${firstName}`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("34"); // Number() is a build-in function.

/* FUNCTION DECLARATIONS VS. EXPRESSIONS ==================================================

*/

// Function Declarations
function calcDec(birthYear) {
  return 2034 - birthYear;
}
const ageDec = calcDec(1990);
console.log(ageDec);

// Function Expressions
const calcExp = function (birthYear) {
  return 2034 - birthYear;
}
const ageExp = calcExp(1990);
console.log(ageExp);