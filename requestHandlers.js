var exec = require("child_process").exec;
var fs = require('fs');
var http = require('http');

function main(response)
{
	console.log("main called");
	var content = "getting commit data";


	response.writeHead(200, {"Content-Type": "text/html"});
    	response.write( load());
    	response.end();

	return content;
}




function load()
{
  return "strng";
}

exports.main = main;
