// Fibonacci Number

function fibonacciGenerator(n) {

    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }

    let output = [0, 1];
    
    for (let i = 2; i < n; i++) {
        
        let nextNumber = output[output.length - 1] + output[output.length - 2];
        output.push(nextNumber);
    }

    console.log(output)
}
fibonacciGenerator(10);


// Second Method
function fibonacciGenerator(n) {

    let output = [];
    
    if (n === 1) {
        output.push(0);
    }
    else if (n === 2) {
        output.push(0, 1);
    }
    else {
        
        output = [0, 1];
        
        for (let i = 2; i < n; i++) {
            let nextNumber = output[output.length - 2] + output[output.length - 1]
            output.push(nextNumber);
        }
    }
    
    return output;
}


