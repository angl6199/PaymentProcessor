var express = require('express');
var router = express.Router();
let divisaController = require('../controllers/divisa')
let jsonTokenController = require('../controllers/jsonToken')

//Anadir usuario nuevo
router.get('/getAll/:token', jsonTokenController.validateToken, divisaController.divisas_list);
router.get('/:code/:token', jsonTokenController.validateToken, divisaController.divisa);
router.post('/create', jsonTokenController.validateToken, divisaController.divisa_create);
router.post('/:code/update', jsonTokenController.validateToken, divisaController.update_Divisa);

module.exports = router;