// To find out how many characters have been written and remained in tweet.

const tweet = prompt("Write your message!");
const characterCount = tweet.length;
const characterRemain = 280 - characterCount;
alert(`You have written ${characterCount} characters. You have ${characterRemain} characters remain.`)