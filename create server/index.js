/** @format */
const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("home world");
    } else if (req.url === "/about") {
        res.end("about page");
    } else if (req.url === "/contact") {
        res.end("contact page");
    } else {
        // http.writeHead(404);
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> page does not exist </h1>");
    }
}).listen(5000);
