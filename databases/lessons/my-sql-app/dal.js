import pool from "./db.js";

export async function getUsers(){
    const [users] = await pool.query("SELECT * FROM users");
    return users; 
}

export async function getUserById(id) {
    const [user] = await pool.query("SELECT * FROM users WHERE id = ?", id);
    return user;
}

getUserById(1);