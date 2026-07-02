function calculateAgeLeft(age) {

    const totalLife = 90;
    const daysLeft = (totalLife - age) * 365;
    const weeksLeft = (totalLife - age) * 52;
    const monthsLeft = (totalLife -age) * 12;

    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`)
}

calculateAgeLeft(23);

// To calculate Body Mass Index 
function bmiCalculator(weight,height) {

    const bmi = weight / Math.pow(height,2);
    const roundTheNumber = Math.floor(bmi);
    return roundTheNumber;
}

const bmi = bmiCalculator(65,1.8);
console.log(bmi);
