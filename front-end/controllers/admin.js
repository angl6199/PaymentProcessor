const axios = require('axios');
const Usuario = require('./../models/usuario')

exports.get_usuarios = (req, res) => {
    axios.get(process.env.BACK_URI + `/users/all/${req.user.jsonToken}`)
        .then((response) => {
            res.render('admin/usuarios', { loggedUser: req.user, usuarios: response.data, environment: process.env.FRONT_URI });
        })
}


exports.get_usuario = (req, res) => {
    axios.get(process.env.BACK_URI +  `/users/getOne/${req.params.id}/${req.user.jsonToken}`)
        .then((response) => {
            res.render('admin/verUsuario', { loggedUser: req.user, usuario: response.data, environment: process.env.FRONT_URI })
        })
}
exports.post_usuario = (req, res) => {
    let credentials = {
        nombre: req.body.nombres,
        apellidos: req.body.apellidos,
        rol: req.body.rol,
        email: req.body.email,
        token: req.user.jsonToken
    }
    axios.post(process.env.BACK_URI + `/users/update/${req.params.id}`, credentials)
        .then((response) => {
            if (response.data == 'Campos mal') {
                res.render('admin/verUsuario', { loggedUser: req.user, usuario: response.data, errorInformation: "Los campos no son válidos", environment: process.env.FRONT_URI  })
            }
            if (response.data == 'Correo ocupado') {
                res.render('admin/verUsuario', { loggedUser: req.user, usuario: response.data, errorInformation: "Correo ya ocupado por otro usuario", environment: process.env.FRONT_URI })
            }
            else if (response.status == 200 && response.data != 'Campos mal' && response.data != 'Correo ocupado') {
                if (req.user.rol == "Admin") {
                    res.redirect(`/admin/${req.user.nombre}-${req.user.apellidos}/usuarios`)
                } else {
                    res.redirect(`/superadmin/${req.user.nombre}-${req.user.apellidos}/usuarios`)
                }
            }
        })
}

exports.get_crear_usuario = (req, res) => {
    res.render('admin/crearUsuario', { loggedUser: req.user, environment: process.env.FRONT_URI })
}
exports.post_crear_usuario = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        res.render('admin/crearUsuario', { loggedUser: req.user, errorInformation: 'Las contraseñas no coinciden', environment: process.env.FRONT_URI });
    }
    else {
        if (validarEmail(req.body.email) && validateField(req.body.nombre) && validateField(req.body.apellidos)) {
            Usuario.create({ nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, password: req.body.password, rol: req.body.rol }, function (err, nuevoUsuario) {
                if (err) {
                    res.render('admin/crearUsuario', { loggedUser: req.user, errorInformation: 'Email ya ocupado', environment: process.env.FRONT_URI });
                }
                else {
                    nuevoUsuario.enviar_mail_bienvenida()
                    res.redirect(`/admin/${req.user.nombre}-${req.user.apellidos}/usuarios`)
                }
            })
        }
        else {
            res.render('admin/crearUsuario', { loggedUser: req.user, errorInformation: 'Campos no válidos', environment: process.env.FRONT_URI });
        }
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
exports.post_borrar_usuario = (req, res) => {
    Usuario.findByIdAndRemove(req.params.id, function(err, response){
        if (err) console.log(err);
        else res.redirect(`/${req.user.rol == "Admin" ? 'admin' : 'superadmin'}/${req.user.nombre}-${req.user.apellidos}/usuarios`)
    })
}