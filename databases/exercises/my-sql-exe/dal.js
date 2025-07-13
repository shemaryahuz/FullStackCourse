import conn from "./db_connection.js";

export async function getFranceCustomersCount(){
    const [count] = await conn.query("SELECT COUNT(*) FROM customers WHERE country = ?", "France");
    return count;
}

export async function getEmplooyeesReportTo1143() {
    const [employees] = await conn.query("SELECT firstName, lastName FROM employees WHERE reportsTo = ?",  1143);
    return employees;
}

export async function getClassicCarsProductsCount(){
    const [count] = await conn.query("SELECT COUNT(*) FROM products WHERE productLine = ?", "Classic Cars");
    return count;
}