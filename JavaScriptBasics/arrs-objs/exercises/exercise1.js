// Swap variable withot temp

// Solution 1
let a = 'Hello World';
let b = 'Java Script';
console.log(a, b);
a += '|' + b;
b = a.split('|')[0];
a = a.split('|')[1];
console.log(a, b);

// Solution 2
a = 'Hello World';
b = 'Java script';
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);
