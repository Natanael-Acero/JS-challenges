//En este desafío, harás que la función isPalindrome() regrese true si la cadena proporcionada es un palíndromo 
//y false en cualquier otro caso.

let testCases = [
    'Evil olive.',
    'Don’t nod.',
    'racecar',
    'Hello',
    'Jimmy',
    'otto'];

const isPalindrome = (word) => {
    const oldWord = word.toLowerCase().trim().replaceAll(/[^\w\s]/gi, '').split('').filter(letter => { return letter !== ' ' });
    const reverseWord = oldWord.slice().reverse()

    if (oldWord.join('') !== reverseWord.join('')) {
        return false;
    }

    return true;
}

const testFunction = (testCases) => {
    let validations = [];
    for (let word of testCases) {
        const isAPalindrome = isPalindrome(word);
        validations.push({ 'Word': word, 'Palindrome': isAPalindrome })
    }
    return validations;
}

testFunction(testCases);

