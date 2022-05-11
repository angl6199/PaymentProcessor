var express = require('express');
var router = express.Router();
let pagosController = require('../controllers/pagos')


//Anadir usuario nuevo
router.get('/:id', pagosController.pagos_list);

router.post('/create', pagosController.pago_create);

module.exports = router;