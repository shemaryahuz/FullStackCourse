// Shift letters of a string

function shiftLetters(str){

    let strArray = str.split('');
    
    return strArray.map((char) => {
        if (char === 'A'){
            return 'Z';
        }
        else if (char === 'a'){
            return 'z';
        }
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }).join('');
}

const str = 'KjDfAoPlMnBvCxEiRtYuQwErTyUiOpAsDfUGhJukLzEXcVebNmQwa';

console.log('String:', str);
console.log('Shifted string:', shiftLetters(str));
