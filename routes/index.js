var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Content-Type", "text/html; charset=iso-8859-1");
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

module.exports = router;
