function analyzeWord(str) {

    const vowels = ["a", "e", "i", "o", "u"]
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

    let vowelCount = 0;
    let consonantCount = 0;
    for (const char of str.toLowerCase()) {

        if (vowels.includes(char)) {
            vowelCount++;
        }
        else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return `vowels: ${vowelCount}, consonants: ${consonantCount}`
}

analyzeWord("Masud Alam");


// to get the value as characters
function analyzeWord(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

    const input = str.toLowerCase();
    let vowelLetters = "";
    let consonantLetters = "";

    for (const char of input) {

        if (vowels.includes(char)) {
            vowelLetters += char;
        }
        else if (consonants.includes(char)) {
            consonantLetters += char;
        }
    }
    
    return `Vowels: ${vowelLetters}, Consonants: ${consonantLetters}`
    
}

console.log(analyzeWord("Masud Alam"))


// Solving the same problem without using for loops
function anayzeWordFunction(str) {

    const vowels = "aeiou".split('');
    const consonants = "bcdfghjklmnpqrstvwxyz".split('');
    const input = str.toLowerCase().split('');

    // Here .filter() works as loop 
    const onlyVowels = input.filter(char => vowels.includes(char));
    const onlyConsonants = input.filter(char => consonants.includes(char));

    console.log(`Vowels: ${onlyVowels} and consonants: ${onlyConsonants}`);
    
}

anayzeWordFunction("Masud")