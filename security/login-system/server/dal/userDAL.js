import pool from "../config/database.js";

export async function createUser(username, hashed_password, role = "user") {
    try {
        const query = "INSERT INTO users (username, hashed_password, role) VALUES(?, ?, ?)";
        const [result] = await pool.execute(query, [username, hashed_password, role]);
        return { id: result.insertId, username: username, role: role };
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            throw new Error("Username already exists");
        }
        throw new Error(error.message);
    }
}

export async function getUserById(id) {
    try {
        const query = "SELECT id, username, hashed_password, role FROM users WHERE id = ?";
        const [rows] = await pool.execute(query, [id]);
        return rows[0] || null;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getUserByUsername(username) {
    try {
        const query = "SELECT id, username, hashed_password, role FROM users WHERE id = ?";
        const [rows] = await pool.execute(query, [username]);
        return rows[0] || null;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateUser(id, updateData) {
    try {
        const { username, role } = updateData;
        const query = "UPDATE users SET username = ?, role = ? WHERE id = ?";
        const [result] = await pool.execute(query, [username, role, id]);
        if (result.affectedRows > 0) {
            return await getUserById(id);
        }
        return null
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            throw new Error("Username already exists");
        }
        throw new Error(error.message);
    }
}

export async function updateUserRole(id, newRole) {
    try {
        const query = "UPDATE users SET role = ? WHERE id = ?";
        const [result] = await pool.execute(query, [newRole, id]);
        if (result.affectedRows > 0) {
            return await getUserById(id);
        }
        return null
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteUser(id) {
    try {
        const query = "DELETE FROM users WHERE id = ?";
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getAllUsers() {
    try {
        const query = "SELECT id, username, role FROM users";
        const [rows] = await pool.execute(query);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getUsersByRole(role) {
    try {
        const query = "SELECT id, username, role FROM users WHERE role = ?";
        const [rows] = await pool.execute(query, [role]);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}