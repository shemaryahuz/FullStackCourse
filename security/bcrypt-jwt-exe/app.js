import express from "express";
import { signup } from "./controllers/controllers.js";

const app = express();

app.use(express.json());

app.post("/signup", signup);


const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) console.log(`Error running: ${error}`);
    console.log(`Server is running at 'http://localhost:${PORT}'...`);
});