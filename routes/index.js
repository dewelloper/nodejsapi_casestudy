var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Here is Rest API home page! Write api-docs to end of the url for seen documentation, for example: localhost:3001/api-docs")
});

module.exports = router;