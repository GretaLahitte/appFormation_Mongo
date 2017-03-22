var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
/* GET users listing. */
router.route('/:_id').get(function (req, res) {
    console.log('req.originalUrl : ', req.originalUrl);
    GLOBAL.database_schema.Users.update({'_id': req.params._id}, {$set: req.query},function (err, result) {
            if (err) {throw err;}
            console.log('modifyUser: ', result);
            GLOBAL.database_schema.Users.find({'_id':req.params._id},function (err, results) {
                if (err) {throw err;}
            	    if ((req.session.passport) && (req.session.passport.user != null)) {

                console.log('user: ', results);
                res.render('modifyUser', {
                    title: 'User modified without error',
                    user: results[0],
                    status:'true'
                    })}else{res.render('modifyUser', {
                    title: 'User modified without error',
                    user: results
					});
				}
            }); // fin du find() après update
        } // fin callback de l'update
    ); // fin de l'update()
}); // fin de la gestion de la route

module.exports = router;
