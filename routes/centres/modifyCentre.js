var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
/* GET users listing. */
router.route('/:_id').get(function (req, res) {
    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.database_schema.Centres.update({'_id': req.params._id}, {$set: req.query},function (err, result) {
            if (err) {throw err;}
            console.log('modifyCentre: ', result);
            GLOBAL.database_schema.Centres.find({'_id':req.params._id},function (err, results) {
                if (err) {throw err;}
            	  if ((req.session.passport) && (req.session.passport.user != null)) {
                  console.log('centre: ', results);
                  res.render('modifyCentre', {
                    title: 'Centre modified without error',
                    centre: results[0],
                    status:'true'
                    })
                }else{
                  res.render('login', {
                title: 'Please login',
                 
            });
				        }
            }); // fin du find() après update
        } // fin callback de l'update
    ); // fin de l'update()
}); // fin de la gestion de la route

module.exports = router;
