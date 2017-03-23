var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
/* Insert one new user into database. */
router.route('/').get(function (req, res) {
	console.log('req.originalUrl : ', req.originalUrl);
    if (!req.query.hasOwnProperty("_id")) req.query._id = new ObjectId();
	GLOBAL.database_schema["Centres"].create([req.query],
		function (err, result) {
			if (err) {
				throw err;
			}
			if ((req.session.passport) && (req.session.passport.user != null)) {
				console.log('createCentre: ', result);
				res.render('modifyCentre', {
					title: 'centre created!',
					centre: result[0],
					status:'true',
					map:true
				});
			}else{
					res.render('login', {title: 'Please login',map:true});
			} // fin callback de l'insert
		}
	); // fin de l'insert()
}); // fin de la gestion de la route

module.exports = router;
