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