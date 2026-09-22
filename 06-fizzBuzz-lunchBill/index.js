const friends = ["Masud", "Ali", "Muhammad", "Salman", "Sazid", "Shoaib"];

function lunchBill(array) {
    
    const selectFriendsNumber = Math.floor(Math.random() * array.length);
    const selectName = array[selectFriendsNumber];
    return `${selectName} is going to buy lunch today!`;
}

lunchBill(friends)


// fizzBuzz Game
const result = [];
let num = 1;

function fizzBuzz() {

    if (num % 3 === 0 && num % 5 === 0) {
        result.push("FizzBuzz");
    }
    else if (num % 5 === 0) {
        result.push("Buzz");
    }
    else if (num % 3 === 0) {
        result.push("Fizz");
    }
    else {
        result.push(num);
    }

    num++;

    console.log(result);
}

fizzBuzz();

// Solving FizzBuzz Game using While loops
// intial 👉 condtion either true or false 👉 increment or decrement 

const output = [];
let count = 1;

function fizzBuzz() {

    while (count <= 100) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
        else {
            output.push(count);
        }

        count++;

    }

    console.log(output);
}

fizzBuzz();



// While loop questions 
let number = 100;

function juiceBottles() {

    while(number >= 1) {

        console.log(`${number} bottles of juice on the wall, ${number} bottles of juice.`);

        console.log(`Put one down and pass it around. ${number-1} bottles of juice.`);

        number--;
    }
}

juiceBottles();

// Method second
let n = 100;
while (n >= 1) {

    if (n === 1) {
        console.log(`${n} bottle of juice on the shelf, ${n} bottle of juice.`)
        console.log(`Pick one down and pass it around, ${n-1} bottle of juice.`)
    }
    else {
        console.log(`${n} bottles of juice on the shelf, ${n} bottles of juice.`)
        console.log(`Pick one down and pass it around, ${n -1} bottles of juice.`)
    }

    n--;
} 

// Avoid repetation 
let counter = 100;

while (counter >=  1) {
   
    let currentBottle = counter === 1 ? "bottle" : "bottles";
    let nextBottle = (counter-1) === 1 ? "bottle": "bottles";

    console.log(`${counter} ${currentBottle} on the wall, ${counter} ${currentBottle} juice.`);
    console.log(`Pick one down and pass it around, ${counter-1} ${nextBottle} of juice.`);

    counter--;
}