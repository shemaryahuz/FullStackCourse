import { randomUUID } from "crypto";

const users = [
    { id: randomUUID(), name: "Alice" },
    { id: randomUUID(), name: "Bobe" }
];

export function getUsers(req, res){
    // response with all users array
    res.json(users);
}

export function getUser(req, res){
    // destruct id from request params
    const { id } = req.params; 
    for (let user of users){
        // if user.id is equal to id, response with the user object
        if (user.id === id){
            res.json(user);
        }
    }
    // if not found, response with message 'id <id> not found' and status code of not found
    res.status(404).json({ msg: `id ${id} not found`});
}

export function createUser(req, res){
    // destruct name from request body
    const { name } = req.body;
    if (!name){
        // if request not in the expected format - { "name" : "some name" }, response with msg of 'body is malformed'
        res.status(404).json({ msg: "body is malformed"})
    }
    // create user with name and unique id
    const newUser = { 
        id: randomUUID(), 
        name: name
    };
    // add the new user to users array
    users.push(newUser);
    // response with the new user object and status code of created
    res.status(201).json(newUser);
}

export function updateUser(req, res){
    // destruct name from request body
    const { name } = req.body;
    if (!name){
    // if request not in the expected format - { "name" : "some name" }, response with msg of 'body is malformed'
    res.status(404).json({ msg: "body is malformed"})
    }
    // destruct id from request params
    const { id } = req.params;
    for (let user of users){
        // if user.id is equal, update the user and response with the user object
        if (user.id === id){
            user.name = name;
            res.status(201).json(user);
        }
    }
    // if not found, response with message 'id <id> not found' and status code of not found
    res.status(404).json({ msg: `id ${id} not found`});
}