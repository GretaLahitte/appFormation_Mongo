var express = require('express');
var router = express.Router();

/* GET formUser page to insert a new user */
router.get('/', function (req, res, next) {
   	if ((req.session.passport) && (req.session.passport.user != null)) {
		res.render('formFormateur', {
			title: 'Create a new Formateur',
			libelle: "creation",
			form_action: "/createFormateur",
			status:"true",
			map:true
		});
	}else{
		res.render('login', {
			title: 'Please login',
		});
    }
});

module.exports = router;
