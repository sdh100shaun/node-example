var http = require("http"); 
var url = require("url"); 


function start(route,handle)
{
	function onRequest(request,response)
	{
	console.log("request recieved");
	var call = url.parse(request.url,true);
	var pathname = call.pathname;
	var render = route(handle,pathname,response);
	

	}	
	
	http.createServer(onRequest).listen(8888);
	console.log("server started"); 
	
}

exports.start = start; 

