// Nasted object

let family = { 
    parents: {},
    children: [
        { name: "Ali" },
        { name: "Lea" },
        { name: "Mona" }
    ] 
};

console.log(`The third child's name is: ${family.children[2].name}`);

console.log("All the names are:");
for (child of family.children) {
    console.log(child.name);
}