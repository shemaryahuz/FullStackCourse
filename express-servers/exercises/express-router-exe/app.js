import express from "express";

const app = express();

app.get("/greet", (req, res) => {
    res.json({ msg: "Hello from '/greet'!"});
});

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
    if (error) throw new Error(error);
    console.log(`Server is listening at 'http:/localhost:${PORT}`);
})