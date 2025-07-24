import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: "login_system",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;