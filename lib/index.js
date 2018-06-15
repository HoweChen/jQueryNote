"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
http
    .createServer(function (req, res) {
    console.log("Request: " + req.method + " to " + req.url);
    res.writeHead(200, "OK");
    res.write("<h1>Hello</h1> Node.js is working");
    res.end();
})
    .listen(8080);
console.log("Ready on port 8080");
