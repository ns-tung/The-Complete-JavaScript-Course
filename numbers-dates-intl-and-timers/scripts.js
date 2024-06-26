'use strict';

/* CONVERTING AND CHECKING NUMBERS ==================================================

    Number
      .parseInt(), .parseFloat(), .isNaN(), .isInteger(), .isFinite(), .toFixed()
*/

console.log(23 === 23.0); // true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23')); // 23
console.log(+'23'); // 23

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

/* MATH AND ROUNDING ==================================================

    Math
      .sqrt(), max(), min(), .PI, .random(), .trunc(), .round(), .ceil(), .floor()

*/

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// Rounding integers
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
// toFixed() does not do type coercion
console.log((2.7).toFixed(0)); // 3 -> string
console.log((2.7).toFixed(3)); // 2.700 -> string
console.log((2.345).toFixed(2)); // 2.35 -> string
console.log(+(2.345).toFixed(2)); // 2.35 -> number

/* THE REMAINDER OPERATOR ==================================================

    The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

*/

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // even number
console.log(6 / 2); // 3

console.log(7 % 2); // odd number
console.log(7 / 2); // 3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

const labelPercent = document.querySelector('.percent');
labelPercent.addEventListener('click', function () {
    [...document.querySelectorAll('.item')].forEach(function (item, i) {
        // 0, 2, 4, 6
        if (i % 2 === 0) item.classList.add('text-danger');
        // 0, 3, 6, 9
        if (i % 3 === 0) item.classList.add('text-blue');
    });
});

/* NUMERIC SEPARATORS ==================================================

    Introduced on ES2021: we can use underscore (_) for a thousand separators.
*/

// ONLY use with number type
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

// DO NOT use with string type
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230

/* WORKING WITH BigInt ==================================================

    Introduced ES2020

    A BigInt value, also sometimes just called a BigInt, is a bigint primitive created by appending n to the end of an integer literal or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.

    NOT WORKING with Math operations, ex: Math.sqrt(), ...

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

*/

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 🚫 9007199254740992
console.log(2 ** 53 + 2); // 🚫 9007199254740994
console.log(2 ** 53 + 3); // 🚫 9007199254740996
console.log(2 ** 53 + 4); // 🚫 9007199254740996

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == '20'); // true

console.log(huge + ' is REALLY big!!!'); // 20289830237283728378237 is REALLY big!!!

// Divisions
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335

/* CREATING DATES ==================================================

    JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since midnight at the beginning of January 1, 1970, UTC (the epoch).

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

*/

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));


// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

/* OPERATIONS WITH DATES ==================================================
*/
const futures = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

/* INTERNATIONALIZING DATES (Intl) ==================================================

    The Intl.DateTimeFormat() object enables language-sensitive date and time formatting.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
*/

const dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric', // 2-digit, long, short
    year: 'numeric',
    weekday: 'long',
}
const formatDate = date => new Intl.DateTimeFormat('vi-VN', dateOptions).format(date);
console.log(formatDate(futures));
console.log(formatDate(days1));

/* INTERNATIONALIZING NUMBERS (Intl) ==================================================

    The Intl.NumberFormat object enables language-sensitive number formatting.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    
*/

const number = 3884764.23;
const numOptions = {
    style: 'currency',
    unit: 'celsius',
    currency: 'EUR',
    // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', numOptions).format(number));
console.log('Germany: ', new Intl.NumberFormat('de-DE', numOptions).format(number));
console.log('Vietnam: ', new Intl.NumberFormat('vi-VN', numOptions).format(number));
console.log(
    navigator.language,
    new Intl.NumberFormat(navigator.language, numOptions).format(number)
);

/* TIMERS: setTimeout() AND setInterval() ==================================================

    The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

        https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

    The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

        https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout

    The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

        https://developer.mozilla.org/en-US/docs/Web/API/setInterval
    
    The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing.

        https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
*/

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
const clock = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}
function updateClock() {
    const now = new Date();
    console.log(new Intl.DateTimeFormat(navigator.language, clock).format(now));
}
setInterval(updateClock, 1000);