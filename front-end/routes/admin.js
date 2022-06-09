var express = require('express');
var router = express.Router();
var clientController = require('./../controllers/client')
var adminController = require('./../controllers/admin')
var authenticationController = require('./../controllers/authentication')

router.get('/:nombre/pagos-realizados', authenticationController.validate_Admin ,clientController.get_pagos_realizados);
router.get('/:nombre/:id/pago', authenticationController.validate_Admin, clientController.get_pago);

router.get('/:nombre/abonos-recibidos', authenticationController.validate_Admin, clientController.get_abonos_recibidos);
router.get('/:nombre/:id/abono', authenticationController.validate_Admin, clientController.get_abono);

router.get('/:nombre/crear-orden', authenticationController.validate_Admin, clientController.get_crear_orden);
router.post('/:nombre/validar-orden', authenticationController.validate_Admin, clientController.post_validar_orden);
router.post('/:nombre/crear-orden', authenticationController.validate_Admin, clientController.post_crear_orden)

router.get('/:nombre/usuarios', authenticationController.validate_Admin ,adminController.get_usuarios);
router.get('/:nombre/:id/usuario', authenticationController.validate_Admin, adminController.get_usuario);
router.post('/:nombre/:id/usuario', authenticationController.validate_Admin, adminController.post_usuario);

router.get('/:nombre/crear-usuario', authenticationController.validate_Admin, adminController.get_crear_usuario);
router.post('/:nombre/crear-usuario', authenticationController.validate_Admin, adminController.post_crear_usuario);

router.post('/:nombre/:id/eliminar-usuario', authenticationController.validate_Admin, adminController.post_borrar_usuario);

module.exports = router;