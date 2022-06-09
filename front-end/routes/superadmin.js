var express = require('express');
var router = express.Router();
var clientController = require('./../controllers/client')
var adminController = require('./../controllers/admin')
var superadminController = require('./../controllers/superadmin')
var authenticationController = require('./../controllers/authentication')

router.get('/:nombre/pagos-realizados', authenticationController.validate_Superadmin ,clientController.get_pagos_realizados);
router.get('/:nombre/:id/pago', authenticationController.validate_Superadmin, clientController.get_pago);

router.get('/:nombre/abonos-recibidos', authenticationController.validate_Superadmin, clientController.get_abonos_recibidos);
router.get('/:nombre/:id/abono', authenticationController.validate_Superadmin, clientController.get_abono);

router.get('/:nombre/crear-orden', authenticationController.validate_Superadmin, clientController.get_crear_orden);
router.post('/:nombre/validar-orden', authenticationController.validate_Superadmin, clientController.post_validar_orden);
router.post('/:nombre/crear-orden', authenticationController.validate_Superadmin, clientController.post_crear_orden)

router.get('/:nombre/usuarios', authenticationController.validate_Superadmin ,adminController.get_usuarios);
router.get('/:nombre/:id/usuario', authenticationController.validate_Superadmin, adminController.get_usuario);
router.post('/:nombre/:id/usuario', authenticationController.validate_Superadmin, adminController.post_usuario);

router.get('/:nombre/crear-usuario', authenticationController.validate_Superadmin, adminController.get_crear_usuario);
router.post('/:nombre/crear-usuario', authenticationController.validate_Superadmin, adminController.post_crear_usuario);

router.post('/:nombre/:id/eliminar-usuario', authenticationController.validate_Superadmin, adminController.post_borrar_usuario);

router.get('/:nombre/divisas', authenticationController.validate_Superadmin, superadminController.get_divisas);

router.get('/:nombre/crear-divisa', authenticationController.validate_Superadmin, superadminController.get_crear_divisa);
router.post('/:nombre/crear-divisa', authenticationController.validate_Superadmin, superadminController.post_crear_divisa);

router.get('/:nombre/:code/divisa', authenticationController.validate_Superadmin, superadminController.get_editar_divisa);
router.post('/:nombre/:code/divisa', authenticationController.validate_Superadmin, superadminController.post_editar_divisa);

module.exports = router;