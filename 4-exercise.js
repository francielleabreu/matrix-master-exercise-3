// Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
//     sum() returns the sum of saved values.
//         mul() multiplies saved values and returns the result.

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let calculator = {
    read() {
        this.value1 = +prompt("Enter the first value:", 0);
        this.value2 = +prompt("Enter the second value:", 0);
    },
    sum() {
        return this.value1 + this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());