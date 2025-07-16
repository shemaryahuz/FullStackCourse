import express from "express";
import reportRouter from "./routes/reportRouter.js";

const app = express();

app.use(express.json());

app.use("/reports", reportRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) console.log(`Error running: ${error}`);
    console.log(`Server is running at 'http://localhost:${PORT}'...`);
});