// Lesson task
const person = {
    name: 'Shemarya',
    age: 25,
    hobbies: ['Chess', 'Playing Piano', 'Programming'],
    favFoods: ['Chocolate', 'Pizza', 'Icecreem']
}
for (key in person){
    console.log(`${key}: ${person[key]}`);
}