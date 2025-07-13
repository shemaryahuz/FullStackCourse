import express from "express";
import { question1, question2, question3 } from "./controllers.js";
const router = express.Router();

router.get("/question1", question1);
router.get("/question2", question2);
router.get("/question3", question3);
router.get("/", (req, res) => {
    res.status(404).send({error: "Route not found."});
});

export default router;