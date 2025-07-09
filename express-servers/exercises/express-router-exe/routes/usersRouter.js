import express from "express";
import { createUser, getUser, getUsers } from "../handlers/users.js";

const router = express.Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

export default router;