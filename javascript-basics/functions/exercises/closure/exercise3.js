// Build functions

function buildFunctions() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push( () => {
                console.log(i);
            }
        );
    }
return arr;
}

const funcs = buildFunctions();

funcs.forEach((func) => func());