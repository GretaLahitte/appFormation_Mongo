var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
/* Insert one new user into database. */
router.route('/').get(function (req, res) {
	console.log('req.originalUrl : ', req.originalUrl);
	if (!req.query.hasOwnProperty("_id")) req.query._id = new ObjectId();
	GLOBAL.database_schema["Users"].create([req.query],
		function (err, result) {
			if (err) {
				throw err;
			}
			if ((req.session.passport) && (req.session.passport.user != null)) {
				console.log('createUser: ', result);
				res.render('modifyUser', {
					title: 'User created,you can now log in!',
					user: result[0],
					status:'true',
				});
			}else{
				res.render('modifyUser', {
					title: 'User created,you can now log in!',
					user: result[0]
				});
			} // fin callback de l'insert
		}); // fin de l'insert()
}); // fin de la gestion de la route

module.exports = router;
