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