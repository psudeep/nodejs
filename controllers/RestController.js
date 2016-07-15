/*
@Company: Medimojo
@Author: Prashant Sudeep
*/

var Client = require('node-rest-client').Client;
var client = new Client();

exports.makeGetCalls = function(req, res, next){
	// direct way 
	client.get("http://api.medimojo.in/v1/files/list/?uid=psudeep", function (data, response) {
		// parsed response body as js object 
		console.log(data);
		// raw response 
		//console.log(response);
		res.status(200).json(data);
	});
};

exports.makePostCall = function(req, res, next){
	// set content-type header and data as json in args parameter 
	var args = {
		data: { test: "hello" },
		headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://remote.site/rest/xml/method", args, function (data, response) {
		// parsed response body as js object 
		console.log(data);
		// raw response 
		//console.log(response);
		res.status(200).json(data);
	});
};