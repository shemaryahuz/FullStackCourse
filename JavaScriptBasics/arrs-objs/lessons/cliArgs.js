const name = process.argv[2];
const age = process.argv[3];
console.log('Hello ', name.toUpperCase(), 'Your birth year is', new Date().getFullYear() - Number(age));