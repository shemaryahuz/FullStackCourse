// Count vowels in a string


function vowelCount(str){

    let vowels = ['a', 'e', 'i', 'u', 'o'];
    let lowerStr = str.toLowerCase();
    let vCount = {};

    vowels.forEach((vowel) => {
        let count = 0;
        for (char of lowerStr){
            if (char === vowel){
                count++;
            }
            vCount[vowel] = count;
        }
    })
    return vCount;
}

const str = 'KjDfAoPlMnBvCxEiRtYuQwErTyUiOpAsDfUGhJukLzEXcVebNmQwa';

console.log('String:', str);
console.log('Vowels Count:', vowelCount(str));

