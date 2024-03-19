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

// const interface = "Audio"; // 🚫 SyntaxError: Unexpected strict mode reserved word
// const private = 34; // 🚫 SyntaxError: Unexpected strict mode reserved word

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

/* ARROW FUNCTIONS ==================================================
    
    💠 An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage.
*/

const calcArr = birthYear => 2034 - birthYear;

const ageArr = calcExp(1990);
console.log(ageArr);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2034 - birthYear;
  const retirement = 65 - age;
  return `${firstName} reties in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1990, "Tung"));
console.log(yearsUntilRetirement(1991, "Jonas"));

/* FUNCTIONS CALLING OTHER FUNCTIONS ==================================================

*/

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitPiecesProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitPiecesProcessor(2, 3));

/* REVIEWING FUNCTIONS ==================================================

*/

const calcAge = function (birthYear) {
  return 2034 - birthYear;
}

const yearsForRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired. 🎉`);
    return -1;
  }
}

console.log(yearsForRetirement(1990, "Tung"));
console.log(yearsForRetirement(1960, "Mike"));

/* INTRODUCTION TO ARRAYS ==================================================

    💠 The Array object, as with arrays in other programming languages, enables the store of a collection of multiple items under a single variable name, and has members for performing common array operations.
*/

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // ▶ (3) ['Michael', 'Steven', 'Peter']
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

const years = new Array(1990, 1982, 1991, 2008, 2020);
console.log(years); // ▶ (5) [1990, 1982, 1991, 2008, 2020]

friends[2] = 'Jay';
console.log(friends); // ▶ (3) ['Michael', 'Steven', 'Jay']

const tung = [firstName, 'Nguyen', calcAge(1990), 'coder', friends];
console.log(tung); // ▶ (5) ['Tung', 'Nguyen', 44, 'coder', Array(3)]

// Practice
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // 44 52 14

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages); // ▶ (3) [44, 52, 14]

/* BASIC ARRAY OPERATIONS (METHODS) ==================================================
    
    💠 Add element(s)
        👉 push() – add element(s) to the end of the array.
        👉 unshift() – add element(s) to the start of the array.
    
    💠 Remove element(s)
        👉 pop() – remove the last element of the array.
        👉 shift() – remove the first element of the array.

    💠 push(), unshift() will return the length of the new array.

    💠 pop(), shift() will return the removed element.

    💠 indexOf() – return the index of the element in the array.

    💠 includes() – return true if the element is in the array and false if it's not.
*/


const myFriends = ['Michael', 'Steven', 'Peter'];
const friendsLength = myFriends.push('Jay');
console.log(myFriends);  // ▶ (4) ['Michael', 'Steven', 'Peter', 'Jay']
console.log(friendsLength); // 4

myFriends.unshift('John');
console.log(myFriends); // ▶ (5) ['John', 'Michael', 'Steven', 'Peter', 'Jay']

myFriends.pop();
const popped = myFriends.pop();
console.log(popped); // Peter
console.log(myFriends); // ▶ (3) ['John', 'Michael', 'Steven']

myFriends.shift();
console.log(myFriends); // ▶ (2) ['Michael', 'Steven']

console.log(myFriends.indexOf('Steven')); // 1
console.log(myFriends.indexOf('Bob')); // -1

myFriends.push(34);
console.log(myFriends); // ▶ (3) ['Michael', 'Steven', 34]
console.log(myFriends.includes('Steven')); // true
console.log(myFriends.includes('Bob')); // false
console.log(myFriends.includes(34)); // true
console.log(myFriends.includes('34')); // false

if (myFriends.includes('Steven')) {
  console.log('I have a friend called Steven');
}

/* Introduction to Objects ==================================================
    
    💠 Array used for structured data.

    💠 Object used for unstructured data.
*/

const tungArr = [
  firstName,
  'Nguyen',
  calcAge(1990),
  'coder',
  friends
];

const tungObj = {
  firstName,
  lastName: 'Nguyen',
  age: calcAge(1990),
  job: 'coder',
  friends
}

/* Dot vs.Bracket Notation ==================================================
    
    💠 Used to access an object's properties.
*/

console.log(tungObj);
console.log(tungObj.firstName);
console.log(tungObj['lastName']);

const nameKey = 'Name';
console.log(tungObj['first' + nameKey]);
console.log(tungObj[`last${nameKey}`]);

// const interestedIn = prompt('What do you want to know about me? Choose between firstName, lastName, age, job, and friends?');

// if (tungObj[interestedIn]) {
//   console.log(tungObj[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends?');
// }

tungObj.location = 'HCM';
tungObj['twitter'] = '@tung-ns';
console.log(tungObj);

console.log(`${tungObj.firstName} has ${tungObj.friends.length} friends, and his best friend is called ${tungObj.friends[0]}.`);

/* OBJECT METHODS ==================================================

    💠 The array is actually a special object.
*/

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtman',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter'],
  hasDriversLicense: true,
  calcAge: function () {
    return this['age'] = 2034 - this['birthYear'];
  },
  getSummary: function () {
    return `${this['firstName']} is a ${this['calcAge']()}-year old ${this['job']}, and he has ${this['hasDriversLicense'] ? 'a' : 'no'} driver's license.`
  }
}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());
console.log(jonas.age);
console.log(jonas.getSummary());
console.log(jonas['getSummary']());

/* ITERATION: THE FOR LOOP ==================================================

    💠 For loop, keep running while the condition is TRUE
*/

for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️.`);
}
/* LOOPING ARRAYS, BREAKING AND CONTINUING ==================================================

*/

const jonasArray = [
  'Jonas', 'Schmedtman', 2034 - 1990, 'teacher', ['Michael', 'Steven', 'Peter']
]

const types = [];

for (let i = 0; i < jonasArray.length; i++) {

  // Reading form jonasArray
  console.log(jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const yearArray = [1990, 2008, 1982, 2020];
const agesArray = [];

for (let i = 0; i < yearArray.length; i++) {
  agesArray.push(2034 - yearArray[i]);
}
console.log(agesArray);

// Continue and Break
console.log('--- ONLY STRING ---');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], '-> ' + typeof jonasArray[i]);
}
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;
  console.log(jonasArray[i], '-> ' + typeof jonasArray[i]);
}

/* LOOPING BACKWARDS AND LOOPS IN LOOPS ==================================================

*/

jonasArray.push(true);
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise}`);
  for (let i = 1; i < 6; i++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${i} 🏋️‍♂️`)
  }
}