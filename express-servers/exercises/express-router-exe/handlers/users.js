const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bobe" }
];

export function getUsers(req, res){
    res.json(users);
}

export function createUser(req, res){
    const newUser = { 
        id: users.length + 1, 
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
}