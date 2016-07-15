/*
@Company: Medimojo
@Author: Prashant Sudeep
*/

var express = require('express');
var router = express.Router();
var RestController = require('./../controllers/RestController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeStarter' });
});

router.get('/restApi/get', RestController.makeGetCalls);

module.exports = router;
