var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('users/userList', { title: 'Express' });
});
router.get('/join', function(req, res, next) {
   res.render('users/join', { title: 'Express', data:'KBJ'});
});
router.get('/login', function(req, res, next) {
   res.render('users/login', { title: 'Express' });
});


module.exports = router;
