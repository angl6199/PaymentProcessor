const Bicicleta = require('../models/bicicleta')

//Listar las bicicletas---------------------------------
exports.bicicleta_list = (req, res)=>{
    Bicicleta.obtenerBicis()
    .then((data) => {
        res.status(200).render('bicicletas/index', {bicis: data})
    })
    .catch(error=> {
        res.status(500).json({message: 'No fue posible recuperar las bicicletas', error: error.message})
    })
}


//Añadir nueva bicicleta--------------------------------
exports.bicicleta_create_view = function(req, res){
    res.status(200).render('bicicletas/create')
}

exports.bicicleta_create = (req, res)=>{
    Bicicleta.crearBici(req.body)
    .then((data) => {
        res.status(201).redirect('/bicicletas')
    })
    .catch(error => {
        res.status(500).json({ message: 'No fue posible agregar la bicicleta.', error: error.message})
    })
} 


//Eliminar bicicleta-----------------------------------
exports.bicicleta_delete = (req, res)=>{
    Bicicleta.borrarBici(req.params.id)
    .then((data) => {
        res.status(200).redirect('/bicicletas')
    })
    .catch(error => {
        res.status(500).json({message: 'No fue posible eliminar la bicicleta.', error: error.message})
    })
}


//Actualizar bicileta----------------------------------
exports.bicicleta_update = (req, res)=>{
    Bicicleta.editarBici(req.body)
    .then((data)=> {
        res.status(200).redirect('/bicicletas')
    })
    .catch(error => {
        res.status(500).json({message: 'No fue posible actualizar la bicicleta', error: error.message})
    })
} 

exports.bicicleta_update_view = (req, res)=>{
    Bicicleta.obtenerBiciPorId(req.params.id)
    .then((data)=> {
        res.status(200).render('./bicicletas/update', {bici: data})
    })
    .catch(error=> {
        res.status(500).json({message: 'No fue posible cargar la información de la bicicleta a editar', error: error.message})
    })
}