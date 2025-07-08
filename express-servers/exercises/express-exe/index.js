
import express from "express";

const app = express();

const port = 3005;

app.get("/", (req, res) =>{
    res.send("Welcome to home!");
})
app.get("/greet", (req, res) =>{
    res.send({"msg": `Hi from GET endpoint: ${new Date()}`});
})

app.listen(port, (error) => {
    if (error) console.error(`Error listening: ${error}`);
    console.log(`Express server is listening on 'http://localhost:${port}'...`);
})