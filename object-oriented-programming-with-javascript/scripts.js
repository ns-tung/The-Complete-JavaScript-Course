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

/* PROTOTYPES ================================================== */

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

/* PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN ==================================================

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

*/

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 3, 5, 5, 7, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.uniqueArray = function () {
    return [...new Set(this)]
};

console.log(arr.uniqueArray()); // ▶ (5) [1, 3, 5, 7, 9]
console.dir(x => x + 1);

/* CODING CHALLENGE #1 ==================================================

    1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
    2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
    3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
    4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

    DATA CAR 1: 'BMW' going at 120 km/h
    DATA CAR 2: 'Mercedes' going at 95 km/h

*/

const Car = function (make, speed) {
    this.make = make; this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();

/* ES6 CLASSES ==================================================

    1. Classes are NOT hoisted
    2. Classes are first-class citizens
    3. Classes are executed in strict mode

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

*/

class Persons {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2034 - this.birthYear);
    }
    greet() {
        console.log(`Hi, ${this.firstName}.`);
    }
}

const jessica = new Persons('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === Persons.prototype);
jessica.greet();

/* SETTERS AND GETTERS ==================================================

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
*/

const currentYear = new Date().getFullYear();

class PersonGS {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    get age() { return currentYear - this.birthYear }

    get fullName() { return this._fullName; }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else console.log(`${name} is not full name.`);
    }
}

const tung = new PersonGS('Tung', 1990); // Tung is not a full name.
console.log(tung); // ▶ PersonGS {birthYear: 1990}
console.log(tung.age); // 34

const walter = new PersonGS('Walter White', 1965);
console.log(walter); // ▶ PersonGS {_fullName: 'Walter White', birthYear: 1965}
console.log(walter.age); // 59
console.log(walter.fullName); // Walter White

/* STATIC METHODS ==================================================

    https://www.w3schools.com/js/js_class_static.asp

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
*/

class PersonStatic {

    // instance methods/features
    constructor(fullName, birthYear) { this.fullName = fullName; this.birthYear = birthYear; }
    get age() { return currentYear - this.birthYear }
    get fullName() { return this._fullName; }
    set fullName(name) { if (name.includes(' ')) this._fullName = name; else console.log(`${name} is not full name.`); }

    // static methods/features
    static hey() {
        console.log('Hey there 👋');
    }
}

const me = new PersonStatic('Tung Nguyen', 1990);

// You can call 'hey()' on the PersonStatic Class
PersonStatic.hey(); // Hey there 👋

// But NOT on a PersonStatic instance, this will raise an error.
me.hey(); // 🚫 me.hey is not a function

// If you want to use the PersonStatic instance inside the static method, you can send it as a parameter.
class PersonStatics {

    constructor(fullName, birthYear) { this.fullName = fullName; this.birthYear = birthYear; }
    get age() { return currentYear - this.birthYear }
    get fullName() { return this._fullName; }
    set fullName(name) { if (name.includes(' ')) this._fullName = name; else console.log(`${name} is not full name.`); }

    static hey(x) {
        console.log(`Hey ${x.fullName} 👋`);
    }
}

const mes = new PersonStatics('Tung Nguyen', 1990);
PersonStatics.hey(mes); // Hey Tung Nguyen 👋

/* THE Object.create() STATIC METHOD ==================================================

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
*/

const PersonPrototype = {
    calcAge() {
        console.log(currentYear - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonPrototype);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2000;
steven.calcAge(); // 24

console.log(steven.__proto__ === PersonPrototype); // true

const sarah = Object.create(PersonPrototype);
sarah.init('Sarah', 1972);
sarah.calcAge(); // 52

//////////////////////////////////////////////////
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? => ${this.isHuman}`);
    },
};

const meObj = Object.create(person);

meObj.name = 'Tung';
meObj.isHuman = true;
meObj.printIntroduction(); // My name is Tung. Am I human? => true

/* CODING CHALLENGE #2 ==================================================

    1. Re-create challenge 1, but this time using an ES6 class;
    2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
    3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
    4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

    DATA CAR 1: 'Ford' going at 120 km/h
*/

class Cars {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS() { return this.speed / 1.6 }
    set speedUS(s) { this.speed = s * 1.6 }
}

const ford = new Cars('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford.speed); // 80

/* INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS ================================================== */

const ThePerson = function (firstName, birthYear) {
    this.firstName = firstName; this.birthYear = birthYear;
}

ThePerson.prototype.calcAge = function () { console.log(currentYear - this.birthYear) };

const TheStudent = function (firstName, birthYear, course) {
    ThePerson.call(this, firstName, birthYear); this.course = course;
}

TheStudent.prototype = Object.create(ThePerson.prototype); // Linking prototypes
TheStudent.prototype.introduce = function () { console.log(`My name is ${this.firstName}, and I study ${this.course}.`) };

const mike = new TheStudent('Mike', 2000, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__); // ▶ ThePerson {introduce: ƒ}
console.log(mike.__proto__.__proto__); // ▶ {calcAge: ƒ}

TheStudent.prototype.constructor = TheStudent; // re-assign the constructor back to the right place
console.dir(TheStudent.prototype.constructor); // ▶ ƒ TheStudent(firstName, birthYear, course)

console.log(mike instanceof TheStudent); // true
console.log(mike instanceof ThePerson); // true
console.log(mike instanceof Object); // true