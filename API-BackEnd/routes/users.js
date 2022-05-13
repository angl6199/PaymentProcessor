var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')


//Anadir usuario nuevo
router.post('/register', userController.user_register);

router.post('/login', userController.user_login);

router.get('/validate', userController.user_session);

router.get('/getOne/:id', userController.get_user_by_id);


module.exports = router;