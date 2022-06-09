const axios = require('axios');
const Usuario = require('./../models/usuario')

exports.get_usuarios = (req, res) => {
    axios.get(`http://localhost:8000/users/all/${req.user.jsonToken}`)
        .then((response) => {
            res.render('admin/usuarios', { loggedUser: req.user, usuarios: response.data });
        })
}


exports.get_usuario = (req, res) => {
    axios.get(`http://localhost:8000/users/getOne/${req.params.id}/${req.user.jsonToken}`)
        .then((response) => {
            res.render('admin/verUsuario', { loggedUser: req.user, usuario: response.data })
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
    axios.post(`http://localhost:8000/users/update/${req.params.id}`, credentials)
        .then((response) => {
            if (response.data == 'Campos mal') {
                res.render('admin/verUsuario', { loggedUser: req.user, usuario: response.data, errorInformation: "Los campos no son válidos" })
            }
            if (response.data == 'Correo ocupado') {
                res.render('admin/verUsuario', { loggedUser: req.user, usuario: response.data, errorInformation: "Correo ya ocupado por otro usuario" })
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
    res.render('admin/crearUsuario', { loggedUser: req.user })
}
exports.post_crear_usuario = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        res.render('admin/crearUsuario', { loggedUser: req.user, errorInformation: 'Las contraseñas no coinciden' });
    }
    else {
        if (validarEmail(req.body.email) && validateField(req.body.nombre) && validateField(req.body.apellidos)) {
            Usuario.create({ nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, password: req.body.password, rol: req.body.rol }, function (err, nuevoUsuario) {
                if (err) {
                    res.render('admin/crearUsuario', { loggedUser: req.user, errorInformation: 'Email ya ocupado' });
                }
                else {
                    nuevoUsuario.enviar_mail_bienvenida()
                    res.redirect(`/admin/${req.user.nombre}-${req.user.apellidos}/usuarios`)
                }
            })
        }
        else {
            res.render('admin/crearUsuario', { loggedUser: req.user, errorInformation: 'Campos no válidos' });
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
    console.log(req.params.id, "ESTE ES EL PRIMERO");
    Usuario.findById(req.params.id, function(err, usuario){
        console.log(usuario, "ESTE ES EL SEGUNDO");
    })
    Usuario.findByIdAndRemove(req.params.id, function(err, response){
        if (err) console.log(err);
        else res.redirect(`/${req.user.rol == "Admin" ? 'admin' : 'superadmin'}/${req.user.nombre}-${req.user.apellidos}/usuarios`)
    })
}