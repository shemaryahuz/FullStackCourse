import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.send("Hello from Server!");
});

app.get("/time", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.send(new Date());
});

app.listen(3000, () => {
    console.log(`Server is listening on: http://localhost:3000`);
});