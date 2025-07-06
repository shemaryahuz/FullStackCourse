// Basic vanila server

import {createServer} from "http";

const PORT = 3000;

const server = createServer();

server.on("request", (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion)
    res.end(`Your ${req.method} request was sended successfully`)
})

server.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'...`);
})