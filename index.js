var server = require("./server"); 
var router = require("./router"); 
var requestHandlers = require("./requestHandlers");

var handle ={}
handle["/"] = requestHandlers.main;
handle["/start"] = requestHandlers.main;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle); 

