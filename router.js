function route(pathname, handle) {
	console.log("About to route " + pathname);
	if(typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		return "404";
	}
}

exports.route = route;