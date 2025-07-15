import express from "express";
import router from "./routes/router.js";

const app = express();

app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
    if (error) console.log(`Error running: ${error}`);
    console.log(`Server is running at 'http://localhost:${PORT}'...`);
});