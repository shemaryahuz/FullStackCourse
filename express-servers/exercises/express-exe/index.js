
import express from "express";

const app = express();

const port = 3005;

app.get("/", (req, res) =>{
    res.send("Welcome to home!");
});

app.get("/greet", (req, res) =>{
    res.send({msg: `Hi from GET endpoint: ${new Date()}`});
});

app.get("/greet/:name", (req, res) => {
    const name = req.params.name;
    console.log(`Got request with Name: ${name}`);
    res.json({msg: `Hello ${name}!`});
});

app.get("/test", async (req, res) => {
    try {
        const response = await fetch(`http://localhost:${port}/greet`);
        const resJson = await response.json();
        console.log(resJson);
        if (resJson.msg && typeof resJson.msg === "string")
            res.json({result:"ok"});
        else
            res.json({result:"fail"});
    } catch (error) {
        console.error(`Error testing greet response: ${error}`);
    }
});

app.listen(port, (error) => {
    if (error) console.error(`Error listening: ${error}`);
    console.log(`Express server is listening on 'http://localhost:${port}'...`);
});