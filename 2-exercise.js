// Exercise 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task, the function should support only the natural values of n: integers up from 1.

// Pseudocode
// Write the function
// Conditional
// Neef for loop
// Print it

function pow(x, n) {
    if (n < 1) {
        return "Inser a number";
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(3, 2)); // Answer: 3 * 3 = 9
console.log(pow(3, 3)); // Answer: 3 * 3 * 3 = 27
console.log(pow(1, 100)); // Answer: 1 * 1 * ...* 1 = 1