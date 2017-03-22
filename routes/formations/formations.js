var express = require ('express');
var router = express.Router();
	var formationsList;

//Get home page
router.get('/',function(req,res,next){

  if ((req.session.passport) && (req.session.passport.user != null)) {

		GLOBAL.database_schema.Formations.find(function(err, result){
			if (err){
				throw err;
			};
			formationsList=result;
     // console.log('bizarre',formationsList);

			console.log('Liste des formations: ',formationsList);
      GLOBAL.database_schema.Centres.find(function(err,results){
		  console.log('toto',results);
			res.render('formations',{
				title:'Liste des formations',
				formations:formationsList,
        coord:results,
				status:'true'
			});
	})})}else{

    GLOBAL.database_schema.Formations.find(function(err, result){
			if (err){
				throw err;
			};
			formationsList=result;
     // console.log('bizarre',formationsList);

			console.log('Liste des formations: ',formationsList);
      GLOBAL.database_schema.Centres.find(function(err,results){
		  console.log('toto: ',results);
			res.render('formations',{
				title:'Liste des formations',
				formations:formationsList,
        coord:results,
			});
	})})}
});
module.exports = router;
