var express = require('express');
var router = express.Router();
var clientController = require('./../controllers/client')
var authenticationController = require('./../controllers/authentication')

router.get('/:nombre/pagos-realizados', authenticationController.validate_Client ,clientController.get_pagos_realizados);
router.get('/:nombre/:id/pago', authenticationController.validate_Client, clientController.get_pago);

router.get('/:nombre/abonos-recibidos', authenticationController.validate_Client, clientController.get_abonos_recibidos);
router.get('/:nombre/:id/abono', authenticationController.validate_Client, clientController.get_abono);

router.get('/:nombre/crear-orden', authenticationController.validate_Client, clientController.get_crear_orden);
router.post('/:nombre/validar-orden', authenticationController.validate_Client, clientController.post_validar_orden);
router.post('/:nombre/crear-orden', authenticationController.validate_Client, clientController.post_crear_orden);

module.exports = router;