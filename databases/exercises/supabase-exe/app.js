import express from "express";
import loginRoute from "./routes/loginRoute.js";

const app = express();

app.use(express.json());
app.use("/login", loginRoute)

const PORT = process.env.PORT;


app.listen(PORT, (error) => {
    if (error) console.log(`Error running: ${error}`);
    console.log(`Server is running at 'http://localhost:${PORT}'...`);
});