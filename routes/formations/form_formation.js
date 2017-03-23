var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');

/* GET users fromm _id. */
router.route('/:_id').get(function(req, res) {
 	GLOBAL.database_schema.Formations.findById({'_id': req.params._id}).populate('formateurs').exec(
		function(err, result) {
	   		if (err) { throw err; }
	   		console.log('formUser: ', result);
			var centre;  
			GLOBAL.database_schema.Formations.findById({'_id': req.params._id}).populate('centres').exec(
				function(err, results) {
					centre=results;
					console.log('centre: ',centre);
					if ((req.session.passport) && (req.session.passport.user != null)) {
		    			res.render('form_formation', {
		        			title: "Formation", 
		        			formations: result,
							status:'true',
							map:true
		    			});
					}else{
						res.render('login')
					}
				}
			)
		}
	)
});
module.exports = router;
