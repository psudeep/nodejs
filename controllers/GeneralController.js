/*
@Company: Medimojo
@Author: Prashant Sudeep
*/

var isOnline = require('is-online');

/* Used to check  if internet is connected or not */ 
isOnline(function(err, online) {
    console.log(online);
    //=> true 
});