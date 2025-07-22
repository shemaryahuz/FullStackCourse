import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
import { addUser, getUser } from "../dal/dal.js";

export async function signup(req, res) {
    // destruct username and password from body
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send({ error: "username and password are required" });
        return;
    }
    // check if user exists in database
    let user = await getUser(username);
    if (user) {
        res.status(409).send({ error: "user already exists" });
        return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = {
        username: username,
        password: hashedPassword
    };
    const insertedId = await addUser(user);
    if (!insertedId) {
        res.status(500).send({ error: "error creating user" });
        return;
    }
    const payload = {
        username: username
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey);
    user.insertedId = insertedId;
    res.cookie("token", token);
    res.send({ message: "user with hashed password created successfully", user: user });
}

export async function signin(req, res) {
    console.log(req.cookies);
    console.log(res.cookies);
    // destruct username and password from body
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send({ error: "username and password are required" });
        return;
    }
    let user = await getUser(username);
    if (!user){
        res.status(404).send({ error: "user not found" });
        return;
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match){
        res.status(404).send( { error: "wrong password"} );
    }
    res.send({ message: "you have signed in successfully" });
}