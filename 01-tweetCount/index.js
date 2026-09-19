// To find out how many characters have been written and remained in tweet.

const tweet = prompt("Write your message!");
const characterCount = tweet.length;
const characterRemain = 280 - characterCount;
alert(`You have written ${characterCount} characters. You have ${characterRemain} characters remain.`)

// Slicing the tweet 
const message = prompt("Compose your tweet here!")
const messageUnder280 = message.slice(0,280);
alert(messageUnder280);

// In one line 
alert(prompt("Compose your tweet!").slice(0,280));

// Capitalize the first letter
const fullName = prompt("Enter your name!");
const sliceFirstChar = fullName.slice(0,1);
const capitalFirstChar = sliceFirstChar.toUpperCase();
const smallRestChar = fullName.slice(1, fullName.length).toLowerCase();
const orderedName = capitalFirstChar + smallRestChar;
alert("Hello, " + orderedName);