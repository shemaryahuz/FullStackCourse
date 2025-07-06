import readline from "readline-sync";

const name = readline.question("Please enter your name: ");

const age = readline.question("Please enter your age: ");

const birthYear = new Date().getFullYear() - age;

console.log(`Hello ${name} your birth year is ${birthYear}`);
