'use strict';

/* DEFAULT PARAMETERS ==================================================

    Introduced on ES6

*/
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

  // ES5:
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking('LH123', 3); // {flightNum: 'LH123', numPassengers: 3, price: 199}
createBooking('LH123', 4); // {flightNum: 'LH123', numPassengers: 4, price: 199}
createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}

/* HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE ==================================================

    💠 In JavaScript, primitive values (like numbers and strings) are passed by value. This means when you pass a number into a function, you pass a copy of that number's value. If you change the value inside the function, the original value doesn't change. However, when you pass an object or an array into a function, you're passing a reference to that object or array, not a copy.

    💠 References and values: When talking about objects or arrays in JavaScript, it can be said that they are passed by value by reference. This means the value of the object or array isn't copied and passed into the function; instead, a pointer or reference to the memory location of the object or array is passed. This allows you to access and modify the properties of the object or elements of the array from within the function.

*/

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // Wrong passport!

/* FIRST-CLASS AND HIGHER-ORDER FUNCTIONS ==================================================

    💠 First-class functions (just a concept)
      👉 JavaScript treats functions as first-class citizens
      👉 This means that functions are simply values
      👉 Functions are just another “type” of object

    💠 Higher-order functions
      👉 A function that receives another function as an argument, that returns a new function, or both
      👉 This is only possible because of first-class functions

*/

// ––– Functions Accepting Callback Functions –––

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord
transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

// ––– Functions Returning Functions –––

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); // Hello Jonas

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas'); // Hi Jonas

/* THE CALL AND APPLY METHODS ==================================================
    
    call(), apply()

*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith'); // John Smith booked a seat on Lufthansa flight LH635

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams'); 👉 the this keyword points to undefined

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);