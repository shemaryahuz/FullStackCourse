// Print name uppercase, birth year by age

function printUpperName(name){
    console.log(name.toUpperCase())
}

function getBirthYear(age){
    return new Date().getFullYear() - age;
}

const name = 'Shemarya';
const age = 25;
console.log('Upper name:');
printUpperName(name)
console.log('Your birth year:', getBirthYear(age));
