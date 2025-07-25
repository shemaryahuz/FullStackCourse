import jwt from "jsonwebtoken";
import { getUserById } from "../dal/userDAL.js";

export async function authenticateToken(req, res, next) {

    try {
        const token = req.cokeies.token;

        if (!token) {
            return res.status(404).json({ message: "Access denied. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await getUserById(decoded.id);

        if (!user) {
            res.clearCookie("token");
            return res.status(401).json({ message: "Invalid token. User not found" });
        }

        req.user = {
            id: user.id,
            username: user.username,
            role: user.role
        }

        next();
    } catch (error) {
        res.clearCookie("token");
        return res.status(401).json({ message: "Invalid token" });
    }
}
