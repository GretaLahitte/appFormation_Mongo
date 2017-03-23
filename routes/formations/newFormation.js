var express = require('express');
var router = express.Router();
/*  GET  formUser  page  to  insert  a  new  user  */
router.get('/', function(req, res, next){
	if ((req.session.passport) && (req.session.passport.user != null)) {
		GLOBAL.database_schema.Formateurs.find({},
			function (err, result) {
				res.render('formFormation1',{
					title:'Create  a  new  formation',
					libelle:"creation",
					form_action:"/createFormation",
					status:'true',
					formateurs:result,
					map:true
				});
			}
		)
	}else{
		res.redirect('login', {
			title: 'Please login'
		});
	}
});

module.exports = router;
