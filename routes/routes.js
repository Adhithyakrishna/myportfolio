var express = require('express');
var router = express.Router();

router.get('/portfolio',function(req, res){
	res.render('portfolio' /*,{layout: false}*/);
});

router.all('*', function(req, res) {
  res.redirect("/portfolio");
});

module.exports = router;