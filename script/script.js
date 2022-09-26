// и нахуй ты сюда зашел?

function generatePassword (passwordLength) {
    let numberChars = "0123456789";                         //
    let upperChars = "ABCDEFGHIJKLMNOPQRSTVWXYZ";           //
    let lowerChars = "abcdefghijklomnoprstvwxyz";           //
    let symbolsChars = "!~$%&/()=?'*+<>|#_-:.;{[]}@^";       // это крч все буковки и цифорки для ген пароля 
    let allChars = numberChars + upperChars + lowerChars + symbolsChars; // это чтобы их всех склеить вместе
    let randPasswordArray = Array(passwordLength); 
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = symbolsChars;                // не ебу что это
    randPasswordArray= randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join(''); // это код
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() + (i + 1));
        let temp = array[i];                                // смешиватель буковок и цифорок
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// поставь лайк за 5 сек или сдохнешь