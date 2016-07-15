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