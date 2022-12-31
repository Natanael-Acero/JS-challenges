const removeVowels = (word) => {
    word = word.replaceAll(/[aeiou]/ig, '');
    return word;
}

removeVowels('NAtanael');