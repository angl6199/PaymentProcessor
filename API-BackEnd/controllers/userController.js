const user = require('../models/users')

exports.user_register = (req, res)=>{
    user.crearUsuario(req.body)
    .then((data) => {
        res.status(201).send('Usuario agregado correctamente')
    })
    .catch(error => {
        res.status(500).json({message: 'No fue posible agregar el usuario.', error: error.message})
    })
}

exports.user_login = (req, res)=>{
    user.validarUsuario(req.body)
    .then((data) => {
        if (data == false) {
            res.status(500).send(false)  
        } else{
            res.status(201).send(data)
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Usuario no valido', error: error.message})
    })
}