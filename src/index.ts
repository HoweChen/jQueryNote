import * as http from "http";
import * as url from "url";
import * as $ from "jquery";

http
  .createServer(function(req: any, res: any) {
    console.log("Request: " + req.method + " to " + req.url);
    res.writeHead(200, "OK");
    res.write("<h1>Hello</h1> Node.js is working");
    res.end();
  })
  .listen(8080);

console.log("Ready on port 8080");
