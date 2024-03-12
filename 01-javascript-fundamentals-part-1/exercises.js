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

/*
  Coding Exercise 2: CHALLENGE #2

    Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

      1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either: "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

      2. Modify the outputs above to use template literals to include the BMI values in the outputs.

      Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

  Note: Don't round the BMI values. Leave them as they are.

*/

if (markHigherBMI) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's! (${bmiMark})`);
}