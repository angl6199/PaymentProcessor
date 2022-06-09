var express = require('express');
var router = express.Router();
let pagosController = require('../controllers/pagos')
let jsonTokenController = require('../controllers/jsonToken')

//Anadir usuario nuevo
router.get('/:id/:token', jsonTokenController.validateToken, pagosController.pagos_list);
router.get('/abonos/:id/:token', jsonTokenController.validateToken, pagosController.abonos_list);
router.get('/getOne/:id/:token', jsonTokenController.validateToken, pagosController.pago_por_Id);
router.post('/create', jsonTokenController.validateToken, pagosController.pago_create);

module.exports = router;