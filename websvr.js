var http = require("http");
var server = http.createServer(function (request, response) {
    "use strict";
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World, my name is Carlos Figueroa");
    response.end();
});
server.listen(8001);