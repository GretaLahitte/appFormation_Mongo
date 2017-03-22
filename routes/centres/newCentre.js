var express = require('express');
var router = express.Router();

/* GET formUser page to insert a new user */
router.get('/', function (req, res, next) {
	if ((req.session.passport) && (req.session.passport.user != null)) {

        res.render('formCentre', {
            title: 'Create a new centre',
            libelle: "creation",
            form_action: "/createCentre",
            status:'true'
        });
	}else{
		res.render('login', {
                title: 'Please login',
                 
            });}
});

module.exports = router;
