import pool from "../database/db.js";

export async function getUsers() {
    const [ users ] = await pool.query("SELECT * FROM users");
    console.log(users);
}

export async function getUser(username) {
    const [ users ] = await pool.query("SELECT * FROM users WHERE username = ?", username);
    return users[0];
}

export async function addUser(user) {
    const [ result ] = await pool.execute(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [user.username, user.password]
    );
    return result.insertId;
}