// Hello response

import {createServer} from "http";

const PORT = 3000;

const server = createServer();

server.listen(PORT, () => {
    console.log(`Server at 'http://localhost:${PORT}' is running...`);
});

server.on("request", (req, res) => {
    if (req.url === "/hello" && (req.method === "GET" || req.method === "POST")){
        res.end(`Hello from '${req.method}'`);
    }
    else{
        res.end("Not supported");
    }
})