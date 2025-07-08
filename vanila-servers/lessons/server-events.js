
import { createServer } from "http";

const PORT = 3000;

const server = createServer((req, res) => {
    const body = [];
    req.on("data", cnuck => {
        console.log(cnuck);
        body.push(cnuck);
    })
    req.on("end", () => {
        const data = JSON.parse(Buffer.concat(body).toString());
        console.log(data);
        res.end(JSON.stringify(data));
    })
    req.on("error", err => {
        console.error(`Request error: ${err}`);
        res.writeHead(500, { "Content-Type": "application/json"});
        res.end(JSON.stringify({error: "Server error"}));
    })
});

server.listen(PORT, () => {
    console.log(`Server running at 'http://localhost:${PORT}'`);
})