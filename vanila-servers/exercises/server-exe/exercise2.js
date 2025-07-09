import { createServer } from "http";

const server = createServer();

server.on("request", (req, res) => {
    const method = req.method;
    res.end(`You have used '${method}' method`);
})



const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening at 'http://localhost:${PORT}'...`);
})