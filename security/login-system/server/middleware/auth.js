import jwt from "jsonwebtoken";
import { getUserById } from "../dal/userDAL.js";

export async function authenticateToken(req, res, next) {

    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
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

export function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        try {
            if (!req.user){
                return res.status(401).json({ message: "Authentication required." })
            }
            if (!allowedRoles.includes(req.user.role)){
                return res.status(403).json({ message: "Action is not allowed for the user's role" });
            }
            next();
        } catch (error) {
            return res.status(500).json({ message: "Authorization error." });
        }
    }
}