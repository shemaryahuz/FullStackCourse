

function getThis(){
    return this;
}

// Global this
console.log(getThis()); // Global object

// Objects this 

const obj1 = {name: "obj1"};
const obj2 = {name: "obj2"};

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

obj1.getName = function(){return this.name};
obj2.getName = obj1.getName;

console.log(obj1.getName()); // obj1
console.log(obj2.getName()); // obj2

// Arrow function

const obj3 = {
    name: "obj3",
    getName: () => this.name
};

console.log(obj3.getName()); // undefind
