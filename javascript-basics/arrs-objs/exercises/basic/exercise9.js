// Count letters

const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

function countLetters(str){
    let lettersCount = {};
    let counter;
    for (char of str){
        if (isLetter(char)){
            counter = 0;
            for (c of str){
                if (c === char){
                    counter++;
                }
            }
            lettersCount[char] = counter;
        }
    }
    return lettersCount;
}

const str = "The purple elephant danced gracefully under shimmering moonlight while seven clockwork butterflies whispered ancient secrets to the sleeping forest guardian who dreamed of crystalline rivers flowing through golden meadows filled with singing flowers."

console.log('String:', str);
console.log('Letters Count:', countLetters(str));

