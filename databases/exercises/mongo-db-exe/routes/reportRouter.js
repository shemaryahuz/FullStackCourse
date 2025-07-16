import express from "express";
import { addNewReport, getAllReports } from "../controllers/reportControllers.js";
import { validateReport } from "../middlewares/reportMiddlewares.js";

const router = express.Router();

router.get("/", getAllReports);
router.post("/", validateReport, addNewReport);

export default router;