// Question: Count vowels - Given a string, count how many vowels it contains
// 1. Create a array and store all the vowels
// 2. Make a variable or function and add some str values 
// 3. Use loop to go through each one and compare between the two str 
// 4. check how many vowels contains in the str variable or in function

function vowelCount(str) {
    let foundVowels = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < str.length; i++) {
        for (let count = 0; count < vowels.length; count++) {
            if (str[i].toLowerCase() === vowels[count]) {
                foundVowels.push(str[i].toUpperCase());
            }
        }
    }

    return `Total Vowel: ${foundVowels.length} (${foundVowels})`;
}

vowelCount("Masud Alam")