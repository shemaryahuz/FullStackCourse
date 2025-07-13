import express from "express";
import router from "./router.js";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", router)

app.listen(PORT, (error) => {
    if (error) console.log(`Error running: ${error}`);
    console.log(`Server is running at 'http://localhost:${PORT}'...`);
});