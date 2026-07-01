function calculateAgeLeft(age) {

    const totalLife = 90;
    const daysLeft = (totalLife - age) * 365;
    const weeksLeft = (totalLife - age) * 52;
    const monthsLeft = (totalLife -age) * 12;

    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`)
}

calculateAgeLeft(23);