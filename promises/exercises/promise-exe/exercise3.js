// Random success or failure

function randomOperation(){
    return new Promise((resolve, reject) => {
        const random = Math.round(Math.random());
        if (random){
            resolve("Success!");
        }
        reject("Faild!");
    })
}

randomOperation().then((resolved) => console.log(resolved)
).catch((rejected) => console.log(rejected));