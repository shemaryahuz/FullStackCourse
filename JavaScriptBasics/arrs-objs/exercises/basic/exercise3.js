// Access a nasted object

let family = {
    lastName: 'Coen',
    parants: {
        father: {name: 'David'},
        mother: {name: 'Sarah'}
    },
    children: [
        {name: 'Yossi'},
        {name: 'Leah'},
        {name: 'Avi'}
    ]
};

// Print the name of the third child
console.log('The third in', family.lastName, 'family is:', family.children[2].name);

// Print all the family names in one string
let names = '';
for (key in family){
    if (Array.isArray(family[key]))
        for (name in family[key]){
            names += (family[key][name].name) + ', ';
    }
    else if (typeof family[key] === 'object'){
        for (subKey in family[key]){
            names += family[key][subKey].name + ', ';
        }
    }
}

names = names.slice(0, -2);
console.log(family.lastName, 'family:', names);
