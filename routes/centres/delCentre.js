
var express = require('express');
var router = express.Router();
/* GET users fromm _id. */
router.route('/:_id').get(function(req, res, next) {
	if ((req.session.passport) && (req.session.passport.user != null)) {
		console.log('req.originalUrl : ' , req.originalUrl);
  		GLOBAL.database_schema.Centres.findByIdAndRemove(req.params._id,
			function(err,result){
				if (err) throw err;
				console.log('Center removed');
				res.render('delCenter',{
					title:'Delete Task',
					status:'true'
				});
			}
		);
	}else {
		res.redirect('login')
	};
});
module.exports = router;
