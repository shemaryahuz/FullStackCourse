// Swap variables without temp

let a = "some string";
let b = "other string";

console.log("Before swaping:");
console.log(`a: ${a}`);
console.log(`b: ${b}`);

b += a;
a = b.slice(0, b.length - a.length);
b = b.slice(a.length, b.length);


console.log("After swaping:");
console.log(`a: ${a}`);
console.log(`b: ${b}`);