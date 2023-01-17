/** @format */

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // // in this technique we are not streaming the data, but using old way of download first and display later
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // });

    // // // lets use streaming approach
    // const ReadableStream = fs.createReadStream("./input.txt");
    // // when data is available for streaming
    // ReadableStream.on("data", (chunkData) => {
    //     res.write(chunkData.toString());
    // });
    // // when data ends
    // ReadableStream.on("end", () => res.end());
    // // if error while reading data
    // ReadableStream.on("error", (err) => console.log(err));

    //3rd and the most easiest way to stream data i.e the pipe method
    const ReadableStream = fs.createReadStream("./input.txt");
    ReadableStream.pipe(res);
});

server.listen(5000);
