// Basic http server

import {createServer} from "http";
const server = createServer((req, res) => {
    // req = requestIncomingMessage;
    // res = responseServerObject;
    console.log(req.url); // '/'
    console.log(req.method); // 'GET'
    console.log(req.headers); // { host: 'localhost:3000', 'user-agent': 'curl/8.11.0', accept: '*/*' }
    res.end(JSON.stringify({message: "Your request was successfull!"})); // This message is sended to the client in the end of response
});

// The callback I send get two params:
// req - contain every what we need know about the client.
// res - the way for server answer to client.

// request contains:
// URL
// METHOD
// BODY // if exist
// HEADERS


// example method listen(port)
// listen is a async function take my callback and turn on her when the action complete.
server.listen(3000, () => {
  console.log('Server running on port 3000');
});