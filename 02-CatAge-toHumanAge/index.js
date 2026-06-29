// Dog age to human age formula (what if dog will be human?)
// humanAge = (dogAge - 2)* 4 + 12
dogAge = prompt("How old is your dog?");
humanAge = (dogAge - 2)* 4 + 12
alert(`Your dog is ${humanAge} years old in human age.`);

// catAge to humanAge
// Formula fur over two years old
catAge = prompt("Enter your Cat age!");
humanAge = (catAge - 2)* 4 + 24
alert(`Your cat is ${humanAge} years old in human.`);


// Increment and decrement
// post-increment and pre-increment and vice versa for decrement
var x = 3;
var y = x++;
y += 1;
// The value of Y will be 4 not 5 because x return original value first then increment(post-increment) 
// aber es wird den Undershied, pre-increment zu benutzen.
var x = 3;
var y = ++x;
y += 1;