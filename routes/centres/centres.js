var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	GLOBAL.database_schema["Centres"].find({},
	function (err, result) {
		if (err) {
			throw err;
			}
		console.log('centersList: ',result);
		if ((req.session.passport) && (req.session.passport.user != null)) {
			res.render('centres', {
				title: 'Liste des centres de formation',
				centres: result ,
				status: "true",
				map: true,
				coord:result
			});
		}else{
			res.render('login', {title: 'Please login'})
			};
		}
	);
});
module.exports = router;
