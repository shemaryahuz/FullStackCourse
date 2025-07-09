import express from "express";
import { createUser, getUser, getUsers, updateUser } from "../handlers/users.js";

const router = express.Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.put("/users/:id", updateUser)

export default router;