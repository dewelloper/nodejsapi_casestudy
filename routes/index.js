var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Here is Rest API home page! Write swagger to end of the url for seen documentation, for example: localhost:3001/swagger")
});

module.exports = router;