// Capitalize a string

function capitalize(str){
    strArray = str.split();
    return strArray.map((char) => char.toUpperCase()).join();
}

const str = 'KjDfAoPlMnBvCxEiRtYuQwErTyUiOpAsDfUGhJukLzEXcVebNmQwa';

console.log('String:', str);
console.log('Capitalize:', capitalize(str));
