import { getUsers, getUser } from "../dal/usersDAL.js";

export async function login(req, res) {
    const { username, password }  = req.body

    if (!username || !password){
        res.status(400).send({ error: "body is malformed" })
        return;
    }
    const user = await getUser(username, password);
    if (!user){
        res.status(401).send({ error: "Wronge username or password" });
        return;
    }
    res.send({ message: `Welcome ${user.username}, You have logged in successfully!` });
}

export async function getAllUsers(req, res) {
    const users = await getUsers();
    const usersStr = JSON.stringify(users, null, 2);
    res.send(usersStr);
}