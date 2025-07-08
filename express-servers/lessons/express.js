import express from "express";

const app = express();
const PORT = 3005;

app.get("/", (req, res) => {
    res.send("Welcome to the app!")
})

app.get("/about", (req, res) => {
    res.send("About us: a simple express sever application.")
})

app.listen(PORT, () => {
    console.log(`Express server is running on 'http://localhost:${PORT}'...`);
})