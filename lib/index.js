"use strict";

var _http = require("http");

var http = _interopRequireWildcard(_http);

var _url = require("url");

var url = _interopRequireWildcard(_url);

var _jquery = require("jquery");

var $ = _interopRequireWildcard(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

http.createServer(function (req, res) {
  console.log("Request: " + req.method + " to " + req.url);
  res.writeHead(200, "OK");
  res.write("<h1>Hello</h1> Node.js is working");
  res.end();
}).listen(8080);

console.log("Ready on port 8080");