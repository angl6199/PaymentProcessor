var express = require('express');
const passport = require('passport');
const Usuario = require('../models/usuario')
const axios = require('axios');

/* Métodos para inicio de sesión */
exports.get_login = (req, res) => {
    res.render('login');
}
exports.post_login = (req, res, next) => {
    passport.authenticate('local', function (err, usuario, info) {
        if (err) return next(err)
        else if (!usuario) return res.render('login', { errorInformation: "Credenciales incorrectas" })
        else if (usuario.verificado == false) return res.render('login', { errorInformation: 'Usuario no verificado por mail' })
        else {
            req.logIn(usuario, function (err) {
                if (err) return next(err)
                else {
                    let credentials = {
                        username: req.body.username,
                        password: req.body.password
                    }
                    axios.post(`http://localhost:8000/users/login`, credentials)
                        .then((response) => {
                            Usuario.findOneAndUpdate({ email: usuario.email }, { jsonToken: response.data }, function (err, user) {
                                return res.redirect(`/cliente/${usuario.nombre}-${usuario.apellidos}/pagos-realizados`)
                            })
                        })
                }
            })
        }

    })(req, res, next)
}

exports.get_login_google = (req, res, next) => {
    passport.authenticate('google')
}

exports.get_login_google_redirect = (req, res, next) => {
    passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }), function (req, res) {
        res.redirect('/')
    }
}

/* Métodos para registro de usuario */
exports.get_register = (req, res) => {
    res.render('signUp');
}
exports.post_register = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        res.render('signUp', { errorInformation: 'Las contraseñas no coinciden' });
    }
    else {
        if (validarEmail(req.body.email) && validateField(req.body.nombre) && validateField(req.body.apellidos)) {
            Usuario.create({ nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, password: req.body.password }, function (err, nuevoUsuario) {
                if (err) {
                    res.render('signUp', { errorInformation: 'Email ya ocupado' });
                }
                else {
                    nuevoUsuario.enviar_mail_bienvenida()
                    res.redirect('/login')
                }
            })
        }
        else {
            res.render('signUp', { errorInformation: 'Campos no válidos' });
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


/* Métodos para cierre de sesión */
exports.get_logout = (req, res) => {
    Usuario.findOneAndUpdate({ email: req.user.email }, { jsonToken: "" }, function (err, user) {
        req.logOut()
        res.redirect('/login');
    })
}