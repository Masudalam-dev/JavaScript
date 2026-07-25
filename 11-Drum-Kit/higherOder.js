// Higher Oder Function and passing function an argument

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const remainder = (num1, num2) => num1 % num2;

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(4, 10, multiply);


