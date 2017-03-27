var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
	if ((req.session.passport) && (req.session.passport.user != null)) {
		GLOBAL.database_schema.Formations.find(
			function(err,result){
				if (err){
					throw err;
				}
		GLOBAL.database_schema.Centres.find(function(err,results){

				res.render('admin',{
					title:'Espace Admin',
					formations: result,
					status:'true',
					map:true,
					coord:results
				});
			})
			}
		);
	}else {
		res.redirect('login', {
                title: 'Please login',
				map:true
        });
	}
});

module.exports = router;
