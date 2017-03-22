var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

   GLOBAL.database_schema["Users"].find({}, function (err, result) {
            if (err) {
                throw err;
            }
            console.log('usersList: ',result);
              	    if ((req.session.passport) && (req.session.passport.user != null)) {

            res.render('users', {
                title: 'List of users',
                users: result ,
                status: "true"
            });
}else{res.render('users', {
                title: 'List of users',
                users: result 
            });}
});
});
module.exports = router;
