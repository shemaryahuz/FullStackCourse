import { createServer } from "http";

const server = createServer();

server.on("request", (req, res) => {
    const headers = req.headers;
    res.end(`Your request headers: ${JSON.stringify(headers)}`);
})



const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening at 'http://localhost:${PORT}'...`);
})