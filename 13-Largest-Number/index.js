// Question Find the largest number?
// 1. Store all the number in array
// 2. assume any number as the largest number 
// 3. Compare the assume number to array via for or while loop


let number = [10, 25, 5, 1, 4, 19, 26, 4, 7];
let largestNumber = number[0]

for (i = 1; i < number.length; i++) {
    
    if (largestNumber < number[i]) {
        largestNumber = number[i]
    } 
}

console.log(largestNumber);

// Second Method
/*
let number = [10, 25, 5, 1, 4, 19, 26, 4, 7];
let largestNumber = number[0]

for(num of number) {
    if (largestNumber < num) {
        largestNumber = num;
    }
}

console.log(largestNumber)
*/

// Solve using while loop
/*
let number = [10, 25, 5, 1, 4, 19, 26, 4, 7];
let largestNumber = number[0]

let i = 1;
while(i < number.length) {
    if (largestNumber < number[i]) {
        largestNumber = number[i]
    }

    i++;
}

console.log(largestNumber)
*/

// Solve using function
let nums = [1, 4, 0, 100, 40, 8, 1000, 4000, 500]
function largestNum(largest) {
    for (i = 1; i < nums.length; i++) {
        if (largest < nums[i]) {
            largest = nums[i]
        }
    }
    return largest;
}

largestNum(nums[0]);