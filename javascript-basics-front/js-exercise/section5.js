// Mixed array

const mixedArray = [
  "hello",
  42,
  null,
  { id: 1, active: true },
  false,
  [1, "a", null],
  undefined,
  "world",
  3.14,
  { nested: { key: "value", flag: false } },
  true,
  "",
  -99,
  [true, false, undefined],
  { items: [1, 2, { deep: "nested" }] },
  null,
  "123",
  0
];

let numbers = 0;
let strings = 0;
let booleans = 0;
let objects = 0;
let undefineds = 0;
let nulls = 0;

mixedArray.forEach(element => {
    if (element === null) {
        nulls++;
    }
    else if (typeof element === "number") {
        numbers++;
    }
    else if (typeof element === "string") {
        strings++;
    }
    else if (typeof element === "boolean") {
        booleans++;
    }
    else if (typeof element === "object") {
        objects++;
    }
    else if (typeof element === "undefined") {
        undefineds++;
    }
});

console.log(`Numbers: ${numbers}`);
console.log(`Strings: ${strings}`);
console.log(`Booleans: ${booleans}`);
console.log(`Objects: ${objects}`);
console.log(`Undefineds: ${undefineds}`);
console.log(`Nulls: ${nulls}`);