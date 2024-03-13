/*
  Coding Exercise 1: CHALLENGE #1 ==================================================

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
  Coding Exercise 2: CHALLENGE #2 ==================================================

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

/*
  Coding Exercise 3: CHALLENGE #3 ==================================================

    There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

    Your tasks:
      1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

      2. Compare the team's average scores to determine the winner of the competition, and print to the console:

      "Dolphins win the trophy" if Dolphins win, or

      "Koalas win the trophy" if Koalas win, or

      "Both win the trophy" if their average scores are equal.

      3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
      
      4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

    TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("Both win the trophy 🏆")
}

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 & scoreKoalas >= 100) {
  console.log("Both win the trophy 🏆")
} else console.log("No one wins the trophy 😞");