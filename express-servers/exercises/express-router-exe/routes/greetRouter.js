import express from "express";
import greet from "../handlers/greet.js";

const router = express.Router();

router.get("/greet", greet);

export default router;