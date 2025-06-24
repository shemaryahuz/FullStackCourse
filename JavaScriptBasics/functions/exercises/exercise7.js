// Capitalize every second word in a string

function swapCase(str){
    let words = str.split(' ');

    return words.map((word, i) =>{
        if (i % 2 === 1){
            return word.toUpperCase();
        }
        else{
            return word;
        }
    }).join(' ');
}

const str = 'The purple elephant danced gracefully under shimmering moonlight while seven clockwork butterflies whispered ancient secrets to the sleeping forest guardian who dreamed of crystalline rivers flowing through golden meadows filled with singing flowers.'

console.log('String:', str);
console.log('Every second word capitalized:', swapCase(str));

