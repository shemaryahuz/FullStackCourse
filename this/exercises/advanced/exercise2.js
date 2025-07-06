const person = {
    name: "Sara",
    getName() {
        return this.name;
    }
};

const showName = person.getName;

console.log(showName()); // undefind

const showName2 = person.getName.bind(person);

console.log(showName2()); // Sara

