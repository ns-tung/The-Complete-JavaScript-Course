/*
  Coding Exercise 1: CHALLENGE #1

  Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

  Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

  Test data:
    Data 1: Marks weights 78kg and is 1.69m tall.John weights 92kg and is 1.95m tall.
    Data 2: Marks weights 95kg and is 1.88m tall.John weights 85kg and is 1.76m tall
*/

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
// const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn * heightJohn);
// const bmiJohn = massJohn / (heightJohn ** 2);

console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);