// the function get word and sub word,
// return true if the sub word contains in the word,
// else the function return false

function isContains(word, subWord) {
    for (let i = 0; i < word.length - (subWord.length - 1); i++) {
        let isContains = true;

        for (let j = 0; j < subWord.length; j++) {
            if (subWord[j] != word[i + j]) {
                isContains = false;
            }
        }

        if (isContains) {
            return true
        }
    }

    return false;
}

// the function get word and start index and end index,
// return return the sub word that between the start index to the end index
function cutString(string, startIndex, endIndex){
    let newWord = "";

    for (let i = startIndex; i <= endIndex; i++){
        newWord+= string[i];
    }

    return newWord;
}
// the function get word end sub word end return the start index of the word
function getStartIndex(word, subWord){
    for (let i = 0; i < word.length - (subWord.length - 1); i++) {
        let isContains = true;

        for (let j = 0; j < subWord.length; j++) {
            if (subWord[j] != word[i + j]) {
                isContains = false;
            }
        }

        if (isContains) {
            return i
        }
    }
}

module.exports = {
    isContains:isContains,
    cutString:cutString,
    getStartIndex:getStartIndex
}
