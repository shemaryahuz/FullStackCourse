// Animal and Dog

function Animal(name){
    this.name = name;
    this.makSound = function(){
        console.log(`${this.name} is making sound`);
    }
}

function Dog(name){
    Animal.call(this, name);
    this.bark = function(){
        console.log(`${this.name} is barking`);
    }
}

const animal = new Animal('Animal');
const dog = new Dog('Rocky');
animal.makSound(); // Animal is making sound
dog.makSound(); // Rocky is making sound
dog.bark(); // Rocky is barking