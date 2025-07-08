// Hello server

import {createServer} from "http";

const PORT = 3000;

const server = createServer();

server.listen(PORT, () => {
    console.log(`Server at 'http://localhost:${PORT}' is running...`);
});

server.on("request", (req, res) => {
    res.end("Hello from Node server");
})