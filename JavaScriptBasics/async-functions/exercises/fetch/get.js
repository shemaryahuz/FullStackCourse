// GET requests


// Get CatFact

// With promise
fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error(`Error: ${error}`))

// With async function
async function getCatFact(count) {
    const factsList = [];
    try{
        for (let i = 0; i < count; i++){
        const res = await fetch(`https://catfact.ninja/fact`);
        const fact = await res.json();
        factsList.push(fact);
        }
        console.log(factsList);
    }
    catch(error){
        console.error(`Error: ${error}`)
    }
}

getCatFact(3);