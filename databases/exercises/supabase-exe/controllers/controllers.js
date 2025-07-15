import { getUsers } from "../dal/dal.js";

export async function getAllUsers(req, res) {
    const users = await getUsers();
    const usersStr = JSON.stringify(users, null, 2);
    res.send(usersStr);
}