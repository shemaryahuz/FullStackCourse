import express from "express";
import { createUser, getUsers } from "../handlers/users.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", createUser);

export default router;