var express = require('express');
var router = express.Router();

/* GET users fromm _id. */
router.route('/:_id').get(function(req, res) {
	var coord;
	console.log('req.originalUrl : ' , req.originalUrl);
	console.log('id: ',req.params._id);
	GLOBAL.database_schema.Formations.findById({'_id': req.params._id}).populate('formateurs').exec(
		function(err, result) {
			GLOBAL.database_schema.Formations.findById({'_id': req.params._id}).populate('centres').exec(
				function(err, resulte) {
					coord=resulte;
					GLOBAL.database_schema.Formateurs.find({},function(err,results){
						GLOBAL.database_schema.Centres.find({},function(err,resultas){
							if (err) { throw err; };
							console.log('formation:',result);
							console.log('List Formateurs: ', results);
							if ((req.session.passport) && (req.session.passport.user != null)) {
								console.log('centres: ',resultas)
						    	res.render('formFormation', {
						        	title: "Formulaire de formation", 
						        	libelle: "modification", 
						        	form_action: "/modifyFormation", 
						        	formations: result ,
									formateurs:results,
									centres:resultas,
									status:'true',
									map:true
						    	});  
							}else {
								console.log('centres: ',resultas);
								console.log('testouille:',resulte.centres)
								res.render('form_formation', {
						        		title: "Form formations datas", 
						        		formations: result ,
										formateurs:results,
										centres:resulte.centres,
										map:true
						    	});
							}
						})
					})
				}
			)
		}
	);
});
module.exports = router;
