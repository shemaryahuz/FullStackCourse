// Fetch function


// Promise returns

// GET request

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(err => console.error(err))

// POST requests

fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            "Content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            title: "My Post",
            content: "My Content",
            id: "1"
        })
    })
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(err => console.error(err))

fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify({
            name: 'shemarya',
            job: 'student'
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));