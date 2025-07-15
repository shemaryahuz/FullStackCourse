// Replace object's keys and values

function replaceKeysWithValues(object){
    let newObject = {};
    for (key in object){
        if (typeof object[key] === 'string' || typeof object[key] === 'number'){
            newObject[object[key]] = key;
        }
        else{
            newObject[key] = object[key];
        }       
    }
    return newObject;
}

const person = {
  name: "Mike",
  age: 32,
  isMarried: false,
  salary: 45000.50,
  hobbies: ["reading", "gaming"],
  pet: null,
  address: {
    city: "Denver",
    zip: 80203
  }
}

console.log('Person:', person);
console.log('Updated person:', replaceKeysWithValues(person));

