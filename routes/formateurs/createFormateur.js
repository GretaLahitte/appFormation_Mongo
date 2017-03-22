var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
/* Insert one new user into database. */
router.route('/').get(function (req, res) {
        console.log('req.originalUrl : ', req.originalUrl);
        if (!req.query.hasOwnProperty("_id")) req.query._id = new ObjectId();

        GLOBAL.database_schema["Formateurs"].create([req.query],
            function (err, result) {
                if (err) {
                    throw err;
                }
                console.log('createFormateur: ', result);
                if ((req.session.passport) && (req.session.passport.user != null)) {
                res.render('modifyFormateur', {
                    title: 'Formateur created!',
                    formateur: result[0]._doc,
                    status:'true'
                });
			}else{'login', {
                title: 'Please login',
                 
            }}
            } // fin callback de l'insert
        ); // fin de l'insert()
}); // fin de la gestion de la route

module.exports = router;
