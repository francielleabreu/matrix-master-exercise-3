// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Do you have your parents permission to access this page?');
//     }
// }

// Rewrite it, to perform the same, but without if...else, and use the arrow function.

const checkAge = (age) => age > 18 ? true : 'Do you have your parents permission to access this page?'

console.log(checkAge(19));
console.log(checkAge(17));

// In the example exercise the confirm function was not defined.