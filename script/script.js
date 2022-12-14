function generatePassword (passwordLength) {
    let numberChars = "0123456789"; 
    let upperChars = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
    let lowerChars = "abcdefghijklomnoprstvwxyz";      
    let symbolsChars = "!~$%&/()=?'*+<>|#_-:.;{[]}@^";
    let allChars = numberChars + upperChars + lowerChars + symbolsChars;
    let randPasswordArray = Array(passwordLength); 
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = symbolsChars;
    randPasswordArray= randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() + (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
