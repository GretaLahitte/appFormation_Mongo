var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	GLOBAL.database_schema.Formateurs.find({},
		function (err, result) {
			if (err) {
				throw err;
			}
			console.log('formateursList: ',result);
			if ((req.session.passport) && (req.session.passport.user != null)) {
						GLOBAL.database_schema.Centres.find(function(err,results){

				res.render('formateurs', {
					title: 'List of formateurs',
					formateurs: result ,
					status: "true",
					map:true,
					coord:results
				});
			})
			}else{
				res.render('login', {
					title: 'Please login',
					map:true
				});
			}
		}
	);
});
module.exports = router;
