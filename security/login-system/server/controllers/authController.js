import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUserByUsername } from "../dal/userDAL.js";

export async function signup(req, res, next) {
    try {
        const { username, password, role = "user" } = req.body;
        if (!username || !password){
            return res.status(400).json( { message: "Username and password are required"})
        }
        const existingUser = await getUserByUsername(username);
        if (existingUser){
            return res.status(409).json({ message: "Username already exists "});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(username, hashedPassword, role);

        const token = jwt.sign(newUser, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message })
    }
}

export async function login(req, res) {
    try {
        const { username, password } = req.body;
        if (!username || !password){
            return res.status(400).json( { message: "Username and password are required"})
        }
        const user = await getUserByUsername(username);
        if (!user){
            return res.status(409).json({ message: "Username is invalid" });
        }
        const hashedPassword = user.hashed_password;
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        if(!isPasswordValid){
            return res.status(409).json({ message: "Password is invalid" });
        }
        const userForToken = { 
            id: user.id,
            username: user.username,
            role: user.role
        }
        const token = jwt.sign(userForToken, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        res.json({ message: "User logged in successfully", user: userForToken });

    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message })
    }
}