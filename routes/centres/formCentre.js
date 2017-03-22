var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* GET user from _id into url */
router.route('/:_id').get(function (req, res) {
        console.log('req.originalUrl : ', req.originalUrl);
        GLOBAL.database_schema["Centres"].find({
            _id: new ObjectId(req.params._id)
        }, function (err, result) {
            if (err) {
                throw err;
            }
            console.log('formCentre: ', result);
              if ((req.session.passport) && (req.session.passport.user != null)) {

            res.render('formCentre', {
                title: "Form center\'s datas",
                libelle: "modification",
                form_action: "/modifyCentre",
                centre: result[0], // il n'y a qu'une réponse possible donc un seul élément dans le tableau
				status:'true'
            });
		}else{res.render('login', {
                title: 'Please login',
                 
            });}
        });
});

module.exports = router;
