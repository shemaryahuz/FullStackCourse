import express from "express";
import greetRouter from "./routes/greetRouter.js";
import usersRouter from "./routes/usersRouter.js";

// intialize express application
const app = express();

// middleware for all requests to convert body to a json object
app.use(express.json());

// use greetRouter for '/greet' route
app.use(greetRouter);

// use usersRouter for '/users' route
app.use(usersRouter);

// get port from .env
const PORT = process.env.PORT;

// run the server
app.listen(PORT, (error) => {
    if (error){
        console.error(`Error running the server: ${error}`);
        return;
    }
    console.log(`Server is listening at 'http:/localhost:${PORT}'...`);
});