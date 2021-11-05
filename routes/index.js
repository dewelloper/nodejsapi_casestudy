// const UsersRoute = require('./case.route');

// module.exports = (app) => {
//     UsersRoute.routesConfig(app);
// }

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Case Study Express API' });
});

module.exports = router;