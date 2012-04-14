function route(handle,pathname,response)
{
 if(typeof handle[pathname] === 'function')
 {
 	return handle[pathname](response);
 }
 else
 {
 	return "no handler found";
	console.log("no route found " + pathname);
  }	
}
exports.route = route;