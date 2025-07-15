// TypeScript Basics

console.log("Welcome to TypeScript Basics!");

// Simple Variables
let userName: string = "John Doe";
let userAge: number = 30;
let isAdmin: boolean = true;

console.log(`User: ${userName}, Age: ${userAge}, Admin: ${isAdmin}`);

// userName = 39; // Error: Type 'number' is not assignable to type 'string'node
// const json = JSON.parse("hello");
// console.log(typeof json); // Error: Argument of type 'string' is not assignable to parameter of type 'never'.

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let mixedArray: (string | number)[] = ["Alice", 25, "Bob", 30];

// Enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(`Colors: ${Color.Red}, ${Color.Green}, ${Color.Blue}`);

// Types
type Status = "active" | "inactive" | "pending";

let userStatus: Status = "inactive";
// userStatus = "deleted"; // Error: Type '"deleted"' is not assignable to type 'Status'.

userStatus = changeStatus(userStatus);

function changeStatus(status: Status): Status{
    console.log(`Status: ${status}`);

    if (status === "inactive") {
        status = "pending"; // Example of changing status
    }
    else if (status === "active") {
        status = "inactive"; // Example of changing status
    }
    else {
        status = "active"; // Example of changing status
    }
    console.log(`Changing status to: ${status}`);

    return status;
}

// Objects Types

type User = {
    name: string,
    age: number,
    isAdmin: boolean,
    updateName: (newName: string) => void; // Optional method
    updateRole: () => void; // Optional method
};

class UserClass implements User {
    name: string;
    age: number;
    isAdmin: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.isAdmin = false;
    }

    updateName(newName: string): void {
        this.name = newName;
    }

    updateRole(): void {
        this.isAdmin = true; // Example of updating role
    }
} 

let user: User = new UserClass("Alice", 28);
console.log(`Created User: ${user.name}, Age: ${user.age}, Admin: ${user.isAdmin}`);
user.updateName("Alice Smith");
user.updateRole();
console.log(`Updated User: ${user.name}, Age: ${user.age}, Admin: ${user.isAdmin}`);

// Interfaces
interface Product {
    id: number;
    name: string;
    price: number;
    discount(discountPercentage: number): number;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    discount(discountPercentage: number): number {
        return this.price - (this.price * discountPercentage / 100);
    }
};

console.log(`Product: ${product.name}, Price: ${product.price}`);
console.log(`Discounted Price: ${product.discount(10)}`);

 