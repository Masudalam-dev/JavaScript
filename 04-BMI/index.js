function bmiCalculator(weight, height) {
    
    const bmiFormula = weight/ Math.pow(height,2);

    return Number(bmiFormula.toFixed(1));
    
}

const bmi = bmiCalculator(90, 2);

if ( bmi < 18.5 ) {
    console.log(`Your BMI is ${bmi}, so you are underweight.`)
}

else if ( bmi >= 18.5 && bmi <= 24.9 ) {
    console.log(`Your BMI is ${bmi}, so you have a normal weight.`)
}

else {
    console.log(`Your BMI is ${bmi}, so you are overweight.`)
}