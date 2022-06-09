var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
let jsonTokenController = require('../controllers/jsonToken')

//Anadir usuario nuevo
router.post('/register', userController.user_register);
router.post('/update/:id', jsonTokenController.validateToken, userController.update_User);
router.post('/login', userController.user_login);

router.get('/validate/:token', jsonTokenController.validateToken, userController.user_session);
router.get('/getOne/:id/:token', jsonTokenController.validateToken, userController.get_user_by_id);
router.get('/all/:token', jsonTokenController.validateToken, userController.get_all_users);

//Estos endpoints no deberían usarse porque no están protegidos, pero se necesitan para reset de Cypress
router.get('/borrarTodos/cypress', userController.user_delete_all_cypress);
router.post('/verificarForzado/cypress', userController.user_verify_force);

module.exports = router;