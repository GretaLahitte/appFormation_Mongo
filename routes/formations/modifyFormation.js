var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var ObjectID = require('mongodb').ObjectID;
/* SET user from _id with new data for an update into mongoDB . */
router.route('/:_id').post(function (req, res) {
					if ((req.session.passport) && (req.session.passport.user != null)) {

    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.database_schema.Formations.update({'_id': req.params._id},{$set: req.body},function (err, results) {
        if (err) { throw err; };
        console.log('modifyUser: ', results);
        GLOBAL.database_schema.Formations.find({'_id': req.params._id}).populate('formateurs').exec(function (err, result) {
              if (err) { throw err; }
              console.log('formation: ', result);
              res.render('modifyFormation', {
                  title: 'Formation modified without error',
                  formations: result[0],
                  status:'true'
              });
          }); // fin du find() après update
       } // fin callback de l'update
    ); // fin de l'update()
			}else res.redirect('login', {
                title: 'Please login',
                 
            });
}); // fin de la gestion de la route
module.exports = router;
