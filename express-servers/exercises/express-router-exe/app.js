import express from "express";
import greetRouter from "./routes/greetRouter.js";

const app = express();

app.use(greetRouter);

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
    if (error) throw new Error(error);
    console.log(`Server is listening at 'http:/localhost:${PORT}'...`);
})