/* 
  VALUES AND VARIABLES ==================================================
    1. Declare variables called country, continent and population and assign their values according to your own country(population in millions).
    2. Log their values to the console.
*/

let country = "Viet Nam";
let continent = "Asia";
let population = 100; // in millions
console.log(country);
console.log(continent);
console.log(population);

/*
  DATA TYPES ==================================================
    1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
    2. Log the types of isIsland, population, country and language to the console.
*/

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*
  LET, CONSTANT & VAR ==================================================
  1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
  2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
  3.Try to change one of the changed variables now, and observe what happens.
*/

let language;
language = "Vietnamese";
const country = "Vietnam";
const continent = "Asia";
const isIsland = false;
isIsland = true;

/*
  BASIC OPERATORS ==================================================
    
    1. If your country split in half, and each half would contain half the population, then how many people would live in each half?

    2. Increase the population of your country by 1 and log the result to the console.

    3. Finland has a population of 6 million. Does your country have more people than Finland?

    4. The average population of a country is 33 million people. Does you country have less people than the average country?

    5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/

let population = 100;
console.log(population / 2);
population++;
console.log(population);

let populationFinland = 6;
console.log(population > populationFinland);

let averagePopulation = 33;
console.log(population < averagePopulation);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

/*
  STRINGS AND TEMPLATE LITERALS ==================================================
    Recreate the description variable from the last assignment, this time using the template literal syntax.
*/

const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

/* 
  TAKING DECISIONS: IF/ELSE STATEMENTS ==================================================

    If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

    After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average.`);
}

/*
  TYPE CONVERSION AND COERCION ==================================================
    
    1. Predict the result of these 5 operations without executing them:

    console.log('9' - '5'); // -> ?
    console.log('19' - '13' + '17'); // -> ?
    console.log('19' - '13' + 17); // -> ?
    console.log('123' < 57); // -> ?
    console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?
    
    2. Execute the operations to check if you were right.
*/

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> "617"
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

/*
  EQUALITY OPERATORS: "==" VS. "===" //////////////////////////////////////////////////

    1. Declare a variable numNeighbors based on a prompt input like this:

      prompt('How many neighbor countries does your country have?');

    2. If there is only 1 neighbor, log to the console 'Only 1 border!' (use loose equality == for now).

    3. Use an else-if block to log 'More than 1 border' in case numNeighbors is greater than 1.

    4. Use an else block to log 'No borders' (this block will be executed when numNeighbors is 0 or any other value).

    5. Test the code with different values of numNeighbors, including 1 and 0.

    6. Change == to ===, and test the code again, with the same values of numNeighbors. Notice what happens when there is exactly 1 border! Why is this happening?

    7. Finally, convert numNeighbors to a number, and watch what happens now when you input 1.

    8. Reflect on why we should use the === operator and type conversion in this situation.
*/

const numNeighbors = prompt('How many neighbor countries does your country have?');
👇
const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 border.");
} else {
  console.log("No borders.");
}

/*
  LOGICAL OPERATORS ==================================================

    1. Comment out the previous code so the prompt doesn't get in the way.

    2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

    3. Write an if statement to help Sarah figure out if your country is right for her.You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

    4. If yours is the right country, log a strings like this 'You should live in Portugal :)'.If not, log 'Portugal does not meet your criteria :('.

    5. Probably your country does not meet all the criteria.So go back and temporarily change some variables in order to make the condition true(unless you live in Canada :D).
*/

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} 😉`);
} else {
  console.log(`${country} does not meet your criteria 😞`);
}

/*
  THE SWITCH STATEMENT ==================================================

    Use a switch statement to log the following string for the given language:

    chinese or mandarin: 'MOST number of native speakers!';

    spanish: '2nd place in number of native speakers';

    english: '3rd place';

    hindi: 'Number 4';

    arabic: '5th most spoken language';

    for all other simply log 'Great language too :D'.
*/

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too 😀");
    break;
}

/*
  THE CONDITIONAL (TERNARY) OPERATOR ==================================================

    1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

    2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);