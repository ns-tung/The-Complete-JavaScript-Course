'use strict';

/* CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR ==================================================
    1. New {} is created
    2. function is called, this = {}
    3. {} linked to prototype
    4. function automatically return {}
*/

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true

/* PROTOTYPES ==================================================

*/

Person.prototype.calcAge = function () {
    console.log(2034 - this.birthYear);
}

jonas.calcAge(); // 43
matilda.calcAge(); // 17

console.log(jonas.__proto__); // {calcAge: f}
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(Person.prototype); // ▶ {species: 'Homo Sapiens', calcAge: ƒ}