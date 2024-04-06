/*
  PROBLEM 1: We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

  1. Understanding the problem
    - What is temp amplitude?
      👉 Answer: the difference between the highest and lowest temp
    - How do you compute max and min temperatures?
    - What's a sensor error? And what do you think you should do?

  2. Breaking up into sub-problems
    - How to ignore errors?
    - Find the max value in the temp array
    - Find the min value in the temp array
    - Subtract min to max (amplitude) and return it
*/

'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/*
  PROBLEM 2: The function should now receive two arrays of temps.

  1. Understanding the problem
    - With two arrays, should we implement functionality twice?
      👉 NO! Just merge two arrays.

  2. Breaking up into sub-problems
    - Merge two arrays.
*/

const calcTempAmp = function (t1, t2) {

  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amp = calcTempAmp([3, 5, 1], [9, 0, 5]);
console.log(amp);

/* DEBUGGING WITH THE CONSOLE AND BREAKPOINTS ==================================================

*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degree celsius:'),
    value: Number(prompt('Degrees celsius:')), // 👉 C) FIX
  };

  console.table(measurement); // 👉 B) FIND
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin()); // 👉 A) IDENTIFY

/* USING A DEBUGGER ==================================================

*/

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0; // 🚫 bug from here
  let min = 0; // 🚫 bug from here

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger; // 👉 use debugger for find bug
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug); // 👉 IDENTIFY

/*
  Coding Challenge ==================================================

  Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

  Your tasks:
    1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.

    2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

  Test data:
    Data 1: [17, 21, 23]
    Data 2: [12, 5, -5, 0, 4]
*/

const dataOne = [17, 21, 23];
const dataTwo = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++)
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  console.log(`...` + str);
}

printForecast(dataOne);
printForecast(dataTwo);