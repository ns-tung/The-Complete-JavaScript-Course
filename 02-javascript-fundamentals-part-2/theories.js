/* ACTIVATING STRICT MODE ==================================================
    
    💠 JavaScript's strict mode is a way to opt into a restricted variant of JavaScript, thereby implicitly opting out of "sloppy mode". Strict mode isn't just a subset: it intentionally has semantics different from regular code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict and non-strict mode codes can coexist so scripts can opt into strict mode incrementally.

    💠 Strict mode makes several changes to standard JavaScript semantics:

      👉 Eliminates some JavaScript silent errors by changing them to throw errors.

      👉 Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

      👉 It prohibits some syntax likely to be defined in future versions of ECMAScript.
    
    💠 Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

"use strict";

const passTest = true;
let hasDriversLicense = false;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("You can drive 😀");

const interface = "Audio"; // 🚫 SyntaxError: Unexpected strict mode reserved word
const private = 34; // 🚫 SyntaxError: Unexpected strict mode reserved word