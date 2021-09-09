import testWords3 from './testWords3.json'
import testWords4 from './testWords4.json'
import testWords5 from './testWords5.json'
import testWords6 from './testWords6.json'
import testWords7 from './testWords7.json'

const combineWords = (letterCounts) => {
    let wordsToReturn;
    if(letterCounts[0]){
        wordsToReturn = (wordsToReturn ? wordsToReturn.concat(testWords3) : wordsToReturn = testWords3);
    }
    if(letterCounts[1]){
        wordsToReturn = (wordsToReturn ? wordsToReturn.concat(testWords4) : wordsToReturn = testWords4);
    }
    if(letterCounts[2]){        
        wordsToReturn = (wordsToReturn ? wordsToReturn.concat(testWords5) : wordsToReturn = testWords5);
    }
    if(letterCounts[3]){        
        wordsToReturn = (wordsToReturn ? wordsToReturn.concat(testWords6) : wordsToReturn = testWords6);
    }
    if(letterCounts[4]){        
        wordsToReturn = (wordsToReturn ? wordsToReturn.concat(testWords7) : wordsToReturn = testWords7);
    }
    return wordsToReturn;
}

const processData = (factor, letterCounts) => {
    let words = combineWords(letterCounts);
    let numberOfWords = words.length/factor;
    let indexDone = [];
    let outputWords = [];
    for(let i = 0; i<numberOfWords; i++){
        let index = Math.floor(Math.random() * words.length);
        while(indexDone.includes(index)){
            index = Math.floor(Math.random() * words.length);
        }
        indexDone.push(index);
        let {word} = words[index]
        outputWords.push(word);
        
    }
    console.log(outputWords);
    return outputWords;
}

export default processData;