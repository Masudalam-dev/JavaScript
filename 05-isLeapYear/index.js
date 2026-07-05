function isLeapYear(year) {
   
    if ( year % 400 === 0 ) {
        console.log("Leap year.")
    }
    else if ( year % 100 === 0 ) {
        console.log("Not a leap year.")
    }
    else if ( year % 4 === 0 ) {
        console.log("Leap year.")
    }
    else {
        console.log("Not a leap year.")
    }
}

isLeapYear(2400);

// Second method to solve the problem
function isLeap(year) {

    if ( year % 4 === 0 ) {
        if ( year % 100 === 0 ) {
            if ( year % 400 === 0 ) {
                return "Leap year";
            }
            else {
                return "Not leap year.";
            }
        }
        else {
            return "Leap Year.";
        }
    } 
    else {
        return "Not Leap year.";
    }
}

isLeap(211);