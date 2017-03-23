var express = require('express');
var router = express.Router();

/* GET users fromm _id. */
router.route('/:_id').get(function(req, res) {
	if ((req.session.passport) && (req.session.passport.user != null)) {
		console.log('req.originalUrl : ' , req.originalUrl);
		console.log('id: ',req.params._id);
		GLOBAL.database_schema.Formations.findById({'_id': req.params._id}).populate('formateurs').exec(
			function(err, result) {
				GLOBAL.database_schema.Formateurs.find({},function(err,results){
					if (err) { throw err; }
	    			console.log('formFormations: ', results);
	    			res.render('formFormations', {
	        			title: "Formulaire de formation", 
	        			libelle: "modification", 
	        			form_action: "/modifyFormation", 
	        			formations: result ,
						formateurs:results,
						status:'true',
						map:true
	    			});  
				});
			}
		)
	}else{
		res.redirect('login', {
            title: 'Please login',
        });
    }
});

module.exports = router;
