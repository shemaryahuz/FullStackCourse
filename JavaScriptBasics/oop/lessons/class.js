// Car classes

class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    drive(){
        console.log(`${this.brand} ${this.model} is driving...`);
    }
    fuel(){
        console.log(`Putting gas in ${this.brand} ${this.model}...`);
    }
}

class Tesla extends Car{
    constructor(model){
        super('Tesla', model);
    }
    fuel(){
        console.log(`Charging ${this.brand} ${this.model}...`);
    }
}

const ferrari = new Car('Ferrari', 'f2024');
const tesla = new Tesla('t2025');

ferrari.drive(); // Ferrari f2024 is driving...
ferrari.fuel(); // Putting gas in Ferrari f2024
tesla.drive(); // Tesla t2025 is driving...
tesla.fuel(); // Charging Tesla t2025...
