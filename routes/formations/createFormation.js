var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
/* Insert one new user into database. */
router.route('/').post(function (req, res) {
	if ((req.session.passport) && (req.session.passport.user != null)) {
	    console.log('req.originalUrl : ', req.originalUrl);
		console.log('req body: ',req.body);
		var newFormation = new GLOBAL.database_schema.Formations(req.body);
	    newFormation.save(function (err, result) {
	    	if (err) {
	        	throw err;
	        }
			GLOBAL.database_schema.Formations.findById({'_id':result._id}).populate('formateurs').exec(
				function(err, results) {
					console.log('formation list',result); 
					console.log('formateurs list: ',results);
					console.log('test: ',results);
					res.render('form_formation',{
		                title: 'Creating Formation without error with datas below :',
		                formations: results,
						status:'true',
						map:true
		            });
		       	} // fin callback de l'insert
		    );//fin de populate
		})
	}else{
		res.redirect('login', {
            title: 'Please login',
			map:true
		});
	}
}); // fin de la gestion de la route

module.exports = router;



