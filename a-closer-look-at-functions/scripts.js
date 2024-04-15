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
['Jonas', 'Martha', 'Adam'].forEach(high5);
// document.body.addEventListener('click', high5);

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

/* THE BIND METHOD ==================================================
    
    bind()

*/

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // null means skips this keyword
// same with: addVAT = value => value + value * 0.23;

console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29

/* CODING CHALLENGE #1 ==================================================

    Let's build a simple poll app!

    A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

    YOUR TASKS:

    1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
    
      1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
            What is your favourite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
            (Write option number)
      
      1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

    2. Call this method whenever the user clicks the "Answer poll" button.

    3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

    4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

    HINT: Use many of the tools you learned about in this and the last section 😉

    BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

    BONUS TEST DATA 1: [5, 2, 3]
    BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['1: JavaScript', '2: Python', '3: Rust', '4: C++'],
  answers: new Array(4).fill(0), // this generates [0, 0, 0, 0].
  registerNewAnswer() {
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
    typeof answer === 'number' && answer >= 1 && answer <= this.answers.length && this.answers[answer - 1]++;
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are: ${this.answers.join(', ')}`)
    }
  }
}

const pollBtn = document.querySelector('.poll');
const answerPoll = pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data2 }, 'string');