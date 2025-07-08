
import express from "express";

const app = express();

const port = 3005;

app.use(express.json());

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

app.post("/action", async (req, res) => {
    const data = req.body;
    if (!data?.action){
        res.status(400).send({"msg": "body is malformed"});
    }
    if (data.action === "joke"){
        const joke = await getJokeUppercase();
        res.send(joke);
    }
    if (data.action === "cat fact"){
        const catImagesLength = await getCatImagesLength(100);
        res.send(catImagesLength);
    }
    res.status(400).send({"msg": "invalid action"});
});

app.listen(port, (error) => {
    if (error) console.error(`Error listening: ${error}`);
    console.log(`Express server is listening on 'http://localhost:${port}'...`);
});

async function getJokeUppercase() {
    try {
        const url = "https://official-joke-api.appspot.com/random_joke";
        const response = await fetch(url);
        const joke = await response.json();
        const upperJoke = {
            joke: joke.setup.toUpperCase() + " " + joke.punchline.toUpperCase()
        };
        return upperJoke;
    } catch (error) {
        console.error(`Error fetching joke: ${error}`);
        return {};
    }
}

async function getCatImagesLength(length) {
    try {
        const url = `https://api.thecatapi.com/v1/images/search?limit=${length}`;
        const api_key = process.env.CAT_API_KEY;
        const request = {
            headers: { "x-api-key":api_key}
        }
        const response = await fetch(url, request);
        const images = await response.json();
        const imagesLength = {
            length: images.length
        };
        return imagesLength;
    } catch (error) {
        console.error(`Error fetching images: ${error}`);
        return {};
    }
}