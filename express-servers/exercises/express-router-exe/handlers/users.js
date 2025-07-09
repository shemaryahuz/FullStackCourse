const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bobe" }
];

export function getUsers(req, res){
    // response with all users array
    res.json(users);
}

export function getUser(req, res){
    // destruct id from request params
    const { id } = req.params; 
    for (let user of users){
        // if user.id is equal to id value (because it's a string)
        if (user.id == id){
            // response with the user object
            res.json(user);
        }
    }
    // if not found, response with message 'id <id> not found' and status code of not found
    res.status(404).json({ msg: `id ${id} not found`});
}

export function createUser(req, res){
    // destruct name from request body
    const { name } = req.body;
    const newUser = { 
        id: users.length + 1, 
        name: name
    };
    // add the new user to users array
    users.push(newUser);
    // response with the new user object and status code of created
    res.status(201).json(newUser);
}