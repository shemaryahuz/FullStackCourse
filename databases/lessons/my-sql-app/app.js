import express from "express";
import { config } from "dotenv";
config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) console.log(`Error running: ${error}`);
    console.log(`Server is running at 'http://localhost:${PORT}'...`);
});