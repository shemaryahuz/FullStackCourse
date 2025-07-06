const user = {
    name: "Alice"
};

function greet(greeting){
    console.log(greeting + " " + this.name);
}

greet("Hello"); // Hello undefined

// Fix with call

greet.call(user, "Hello"); // Hello Alice