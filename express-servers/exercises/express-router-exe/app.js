import express from "express";
import greetRouter from "./routes/greetRouter.js";

// intialize express application
const app = express();

// middleware for all requests to convert body to a json object
app.use(express.json());

// use greet router for '/greet' route
app.use(greetRouter);

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bobe" }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = { 
        id: users.length + 1, 
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
})

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