var express = require('express');
var router = express.Router();
let bicicletaController = require('../controllers/bicicleta')

//Listar las bicicletas
router.get('/', bicicletaController.bicicleta_list);

//Añadir nueva bicicleta
router.get('/create', bicicletaController.bicicleta_create_view)
router.post('/create', bicicletaController.bicicleta_create)

//Eliminar bicicleta
router.post('/:id/delete', bicicletaController.bicicleta_delete)

//Actualizar bicicleta
router.get('/:id/update', bicicletaController.bicicleta_update_view)
router.post('/:id/update', bicicletaController.bicicleta_update)


module.exports = router;