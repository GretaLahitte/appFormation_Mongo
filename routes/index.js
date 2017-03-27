var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if ((req.session.passport) && (req.session.passport.user != null)) {
		res.render('index', {
			title: 'Bienvenu',
			status:'true',
			map:true
		});
	}else{
		GLOBAL.database_schema.Centres.find(function(err,results){
			res.render('index', {
				title: 'Bienvenu',
				map:true,
				coord:results
			})
		})
	}
});

module.exports = router;
