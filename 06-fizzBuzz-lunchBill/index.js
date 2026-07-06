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