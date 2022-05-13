var express = require('express');
var router = express.Router();
let pagosController = require('../controllers/pagos')


//Anadir usuario nuevo
router.get('/:id', pagosController.pagos_list);
router.get('/abonos/:id', pagosController.abonos_list);
router.get('/getOne/:id', pagosController.pago_por_Id);
router.post('/create', pagosController.pago_create);

module.exports = router;