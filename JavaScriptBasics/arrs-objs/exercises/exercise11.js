// Capitalize keys of an object and sort
function keysToUpper(object){
    let newObject = {};
    for (key in object){
        newObject[key.toUpperCase()] = object[key];
    }
    return newObject;
}

function keysArray(object){
    let keysArr = [];
    for (key in object){
        keysArr.push(key);
    }
    return keysArr;
}

const person = {
  name: "Sarah",
  age: 25,
  city: "Boston",
  isStudent: true,
  score: 92
}

const capitalizedPerson = keysToUpper(person);
const personKeys = keysArray(capitalizedPerson).sort();

console.log('Person:', person);
console.log('Capitalized and sorted Person:')
for (key of personKeys){
    console.log(key, ':', capitalizedPerson[key]);
}
