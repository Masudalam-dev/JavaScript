// To find out how many characters have been written and remained in tweet.
/*
const tweet = prompt("Write your message!");
const characterCount = tweet.length;
const characterRemain = 280 - characterCount;
alert(`You have written ${characterCount} characters. You have ${characterRemain} characters remain.`)
*/

// Slicing the tweet 
const tweet = prompt("Compose your tweet here!")
tweetUnder280 = tweet.slice(0,280);
alert(tweetUnder280);

// In one line 
alert(prompt("Compose your tweet!").slice(0,280));