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