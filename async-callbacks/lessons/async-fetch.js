// Async function

async function fetchData() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
fetchData();