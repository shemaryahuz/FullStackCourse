// Function constructor

// Person

function Person(name, age){
    this.name = name;
    this.age = age;
    this.show = function () {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const me = new Person('Shemarya', 25);

console.log(me.name); // Shemarya
console.log(me.age); // 25
me.show(); // Shemarya is 25 years old.

// Animal

function Animal(name){
    this.name = name;
    this.makeSound = function (){
        console.log(this.name, 'is making sound!'); 
    }
}

const dog = new Animal('Dog');
const cat = new Animal('Cat');
dog.makeSound(); // Dog is making sound!
cat.makeSound(); // Cat is making sound!

console.log('Dog prototype:', Object.getPrototypeOf(dog)); // {}
console.log('Cat prototype:', Object.getPrototypeOf(cat)); // {}