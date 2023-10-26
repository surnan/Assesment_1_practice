/*
    Translation Training
    Write a function translationTraining(sentence) that accepts a sentence string and returns a new version of the sentence
    with the new words that alternate between having their first or last vowel removed.

    THe first word of the sentence should have its first vowel removed.
    The second word of the sentence should have its last vowel removed.
    The third word of the sentence should have its first vowel removed.
    The fourth word of the sentence should have its last vowel removed.

    A word without vowels should remain unchanged

    And so on. See examples below:

    console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
    console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
    console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
    console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"

    Hint: Use helper methods.
*/
console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"

function getVowelIndex(front, word){
    const vowels = 'aeiouAEIOU';

    if (front){
        for (let i=0; i<word.length; i++){
            if (vowels.includes(word[i])){
                return i;
            }
        }
    } else {
        for (let i=word.length-1; i>=0; i--){
            if (vowels.includes(word[i])){
                return i;
            }
        }
    }
    return -1;  // No vowels found in word
}

function spliceStringCharacter(index, word){

    if (index < 0) {return word}

    let front = word.slice(0,index);
    let back = word.slice(index+1);
    return front+back;
}


function translationTraining(sentence) {

    let words = sentence.split(' ');
    let answer= [];
    let firstVowel = true;

    for (const word of words){
        let index = getVowelIndex(firstVowel, word);
        let newWord = spliceStringCharacter(index, word);
        answer.push(newWord);
        firstVowel = !firstVowel;
    }
    console.log('answer: ', answer.join(' '));
    return answer.join(' ');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = translationTraining;
} catch (e) {
    module.exports = null;
}
