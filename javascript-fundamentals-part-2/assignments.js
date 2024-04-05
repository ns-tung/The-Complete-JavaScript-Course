"use strict";

/* FUNCTIONS ==================================================
    
    1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

    2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.  
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeVietnam = describeCountry("Vietnam", "100", "Hanoi");
const describeFinland = describeCountry("Finland", "6", "Helsinki");
const describePortugal = describeCountry("Portugal", "10", "Lisbon");
console.log(describeVietnam + "\n\n" + describeFinland + "\n\n" + describePortugal);

/* FUNCTION DECLARATIONS VS. EXPRESSIONS ==================================================

    1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

    2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

    3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

    4. Create a function expression which does the exact same thing, called percentageOfWorld2, and also call it with 3 country populations (can be the same populations).
*/

function percentageOfWorld1(populations) {
  return populations / 7900 * 100;
}

const percentageOfWorld2 = function (populations) {
  return populations / 7900 * 100;
}

const percentageOfFinland1 = percentageOfWorld1(6);
const percentageOfVietnam1 = percentageOfWorld1(100);
const percentageOfPortugal1 = percentageOfWorld1(10);
console.log(percentageOfVietnam1 + "\n" + percentageOfFinland1 + "\n" + percentageOfPortugal1);

const percentageOfFinland2 = percentageOfWorld2(6);
const percentageOfVietnam2 = percentageOfWorld2(100);
const percentageOfPortugal2 = percentageOfWorld2(10);
console.log(percentageOfVietnam2 + "\n" + percentageOfFinland2 + "\n" + percentageOfPortugal2);

/* ARROW FUNCTIONS ==================================================

    Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
*/

const percentageOfWorld3 = populations => populations / 7900 * 100;

const percentageOfFinland3 = percentageOfWorld3(6);
const percentageOfVietnam3 = percentageOfWorld3(100);
const percentageOfPortugal3 = percentageOfWorld3(10);
console.log(percentageOfVietnam3 + "\n" + percentageOfFinland3 + "\n" + percentageOfPortugal3);

/* FUNCTIONS CALLING OTHER FUNCTIONS ==================================================
    
    1. Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

    2. To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

    3. Call describePopulation with data for 3 countries of your choice.
*/

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("Finland", 6);
describePopulation("Portugal", 10);
describePopulation("Vietnam", 100);

/* INTRODUCTION TO ARRAYS ==================================================
    
    1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

    2. Log to the console whether the array has 4 elements or not (true or false).

    3. Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
*/

const populations = [6, 10, 100, 332];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];
console.log(percentages);

/* INTRODUCTION TO OBJECTS ==================================================

    Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbors (an array like we used in previous assignments).
*/

const myCountry = {
  country: 'Vietnam',
  capital: 'Hanoi',
  language: 'Vietnamese',
  population: 100,
  neighbors: ['China', 'Laos', 'Cambodia'],
}

/* DOT VS. BRACKET NOTATION ==================================================
    
    Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

    Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
*/

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries, and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

/* OBJECT METHODS ==================================================

    1. Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

    2. Call the describe method.

    3. Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

const vietnam = {
  country: 'Vietnam',
  capital: 'Hanoi',
  language: 'Vietnamese',
  population: 100,
  neighbors: ['China', 'Laos', 'Cambodia'],
  describe: function () {
    console.log(`${this['country']} has ${this['population']} million ${this['language']}-speaking people, ${this['neighbors'].length} neighbouring countries, and a capital called ${this['capital']}.`);
  },
  checkIsland: function () {
    // this['isIsland'] = this['neighbors'].length === 0?true:false;
    // this['isIsland'] = this['neighbors'].length === 0;
    this['isIsland'] = !Boolean(this['neighbors'].length);
  }
}

vietnam['describe']();
vietnam['checkIsland']();
console.log(vietnam);

/* ITERATION: THE FOR LOOP ==================================================

    There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
*/

for (let voter = 1; voter <= 50; voter++)
  console.log(`Voter number ${voter} is currently voting 🗳️`);

/* LOOPING ARRAYS, BREAKING AND CONTINUING ==================================================

    1. Let's bring back the populations array from a previous assignment.

    2. Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

    3. Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.
*/

// populations already defined at line 88
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

/* LOOPING BACKWARDS AND LOOPS IN LOOPS ==================================================

    1. Store this array of arrays into a variable called listOfNeighbours:

      [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
    
    2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

    3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

/* THE WHILE LOOP ==================================================

    1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

    2. Reflect on what solution you like better for this task: the for loop or the while loop?
*/

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);