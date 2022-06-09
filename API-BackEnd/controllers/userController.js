const Usuario = require('../models/usuario')
const passport = require('../config/passport')
const jwt = require('jsonwebtoken')

exports.user_register = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        res.json('Contrasenas no coinciden')
    }
    else {
        if (validarEmail(req.body.email) && validateField(req.body.nombre) && validateField(req.body.apellidos)) {
            Usuario.create({ nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, password: req.body.password }, function (err, nuevoUsuario) {
                if (err) {
                    res.json('Email ocupado')
                }
                else {
                    res.status(200).json(nuevoUsuario)
                    nuevoUsuario.enviar_mail_bienvenida()
                }
            })
        }
        else {
            res.json("Campos no validos")
        }
    }
}

exports.get_user_by_id = (req, res) => {
    Usuario.findById(req.params.id, function (err, usuario) {
        res.json(usuario)
    })
}

exports.get_all_users = (req, res) => {
    Usuario.find({}, function (err, usuarios) {
        res.json(usuarios)
    })
}

exports.update_User = (req, res) => {
    var ObjectId = require('mongoose').Types.ObjectId;
    let data = { nombre: req.body.nombre, apellidos: req.body.apellidos, rol: req.body.rol, email: req.body.email }
    if (validarEmail(req.body.email) && validateField(req.body.nombre) && validateField(req.body.apellidos) && validateField(req.body.rol)) {
        Usuario.find({ email: req.body.email }, function (err, usuarios) {
            let flag = false
            if (usuarios.length > 0) {
                usuarios.forEach(usuario => {
                    let temp = new ObjectId(req.params.id)
                    if (usuario._id.toString() != temp.toString()) {
                        flag = true
                    }
                });
                if (flag == false) {
                    Usuario.findByIdAndUpdate(req.params.id, data, function (err, usuario) {
                        if (err) res.json(err)
                        res.json(usuario)
                    })
                } else {
                    res.json("Correo ocupado")
                }
            } else {
                Usuario.findByIdAndUpdate(req.params.id, data, function (err, usuario) {
                    if (err) res.json(err)
                    res.json(usuario)
                })
            }
        })

    } else {
        res.json("Campos mal")
    }

}

function validateField(valor) {
    if (valor == '' || valor == undefined || valor == null) {
        return false
    } else {
        return true
    }
}

function validarEmail(valor) {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec(valor)) {
        return false
    }
    return true
}

exports.user_login = (req, res, next) => {
    passport.authenticate('local', function (err, usuario, info) {
        if (err) console.log("Error en passport")
        if (!usuario) res.json('Usuario no existe')
        if (usuario.verificado == false) res.json('Usuario no verificado')
        req.logIn(usuario, function (err) {
            if (err) console.log(err, "Hubo un error en el inicio de sesion")
            else {
                const token = jwt.sign({ email: usuario.email, nombre: usuario.nombre, apellidos: usuario.apellidos }, "Esta es mi super clave secreta", { expiresIn: 60 * 60 * 2 })
                res.json(token)
            }
        })
    })(req, res, next)
}

exports.user_delete_all_cypress = (req, res, next) => {
    Usuario.deleteMany({}, function(err, temp){
        res.status(204).end()
    })
}

exports.user_verify_force = (req, res, next) => {
    Usuario.findOneAndUpdate({email: req.body.email}, {verificado: true}, function(err, temp){
        res.status(202).end()
    })
}

exports.user_session = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user)
    } else {
        res.status(200).json(req.isAuthenticated())
    }
}