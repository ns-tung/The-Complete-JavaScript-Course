'use strict';

/* AN HIGH-LEVEL OVERVIEW OF JAVASCRIPT ==================================================

*/

/* THE JAVASCRIPT ENGINE AND RUNTIME ==================================================

*/

/* EXECUTION CONTEXTS AND THE CALL STACK ==================================================

*/

/* SCOPE AND THE SCOPE CHAIN ==================================================
  
  💠 Scope refers to the context in which a variable is declared and can be accessed. It defines the region of code where a certain variable exists and can be utilized. In JavaScript, there are three main types of scope: global scope, function scope, and block scope.

    👉 Global Scope: Variables declared outside of any function or block have global scope, meaning they can be accessed from anywhere within the program.

    👉 Function Scope: Each function creates its own scope, and variables declared within a function are accessible only within that function.

    👉 Block Scope: Introduced in ES6, blocks like those in if statements or loops also create scopes. Variables declared with `let` or `const` within a block are accessible only within that block.

  💠 The scope chain refers to the hierarchy of scopes in which variables can be accessed. When a variable is not found in the current scope, the JavaScript engine looks up the scope chain to find the variable. This process continues until the variable is found or until the global scope is reached.

    👉 Lexical Scoping: In JavaScript, the accessibility of variables is determined by their location in the source code. Inner scopes have access to variables in outer scopes, but not vice versa. This is known as lexical scoping.

  Why They're Important: Understanding scope and the scope chain is crucial for writing and debugging JavaScript code. It allows developers to control variable access, prevent naming conflicts, and optimize code performance.

  How They Work: Scopes are created based on where variables are declared in the code. Each scope has access to variables in its parent scopes, forming the scope chain. When a variable is referenced, the JavaScript engine searches the scope chain to find the variable, starting from the innermost scope and moving outward until the variable is found or the global scope is reached.
*/

const calAge = function (birthYear) {
  const age = 2034 - birthYear;
  const printAge = function () {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Tung';
calAge(1990);

/* VARIABLE ENVIRONMENT: HOISTING AND THE TDZ ==================================================

*/

/* THE THIS KEYWORD ==================================================

*/

/* ARROW FUNCTIONS ==================================================

*/

/* PRIMITIVES VS. OBJECTS (PRIMITIVE VS. REFERENCE TYPES) ==================================================

*/