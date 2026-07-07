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
let num = 100;

function juiceBottles() {

    while(num >= 1) {

        console.log(`${num} bottles of juice on the wall, ${num} bottles of juice.`);

        console.log(`Put one down and pass it around. ${num-1} bottles of juice.`);

        num--;
    }
}

juiceBottles();

// Method second
let num = 100;
while (num >= 1) {

    if (num === 1) {
        console.log(`${num} bottle of juice on the shelf, ${num} bottle of juice.`)
        console.log(`Pick one down and pass it around, ${num-1} bottle of juice.`)
    }
    else {
        console.log(`${num} bottles of juice on the shelf, ${num} bottles of juice.`)
        console.log(`Pick one down and pass it around, ${num -1} bottles of juice.`)
    }

    num--;
} 

// Avoid repetation 
let num = 100;

while (num >=  1) {
   
    let currentBottle = num === 1 ? "bottle" : "bottles";
    let nextBottle = (num-1) === 1 ? "bottle": "bottles";

    console.log(`${num} ${currentBottle} on the wall, ${num} ${currentBottle} juice.`);
    console.log(`Pick one down and pass it around, ${num-1} ${nextBottle} of juice.`);

    num--;
}