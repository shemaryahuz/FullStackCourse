// Server with expected request format

import { createServer } from "http";

const PORT = 3000;

const server = createServer();

server.on("request", (req, res) => {
    if (req.method === "POST" && req.headers["content-type"] === "application/json"){
        res.end("JSON accepted");
    } else {
        res.end("Unsupported request");
    }
})

server.listen(PORT, () => {
    console.log(`Server at 'http://localhost:${PORT}' is running...`);
})