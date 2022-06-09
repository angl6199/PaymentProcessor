const axios = require('axios');

exports.get_divisas = (req, res) => {
    axios.get(`http://localhost:8000/divisas/getAll/${req.user.jsonToken}`)
        .then((response) => {
            res.render('superadmin/divisas', { loggedUser: req.user, divisas: response.data });
        })
}
exports.get_crear_divisa = (req, res) => {
    res.render('superadmin/crearDivisa', { loggedUser: req.user })
}

exports.post_crear_divisa = (req, res) => {
    let final = false
    if (req.body.active == "Activada") {
        final = true
    }
    let credentials = {
        code: req.body.code,
        description: req.body.description,
        active: final,
        token: req.user.jsonToken
    }
    if (validateField(req.body.code) && validateField(req.body.description) && validateField(req.body.active)) {
        axios.post(`http://localhost:8000/divisas/create/`, credentials)
            .then((response) => {
                if (response.data == 'Error en los campos') {
                    res.render('superadmin/crearDivisa', { loggedUser: req.user, errorInformation: "Los campos no son válidos" })
                }
                if (response.data == 'Divisa ya existe') {
                    res.render('superadmin/crearDivisa', { loggedUser: req.user, errorInformation: "Divisa ya registrada" })
                }
                else if (response.data != 'Error en los campos' && response.data != 'Divisa ya existe') {
                    res.redirect(`/superadmin/${req.user.nombre}-${req.user.apellidos}/divisas`)
                }
            })
    }
    else {
        res.render('superadmin/crearDivisa', { loggedUser: req.user, errorInformation: "Campos no válidos" })
    }
}
function validateField(valor) {
    if (valor == '' || valor == undefined || valor == null) {
        return false
    } else {
        return true
    }
}

exports.get_editar_divisa = (req, res) => {
    axios.get(`http://localhost:8000/divisas/${req.params.code}/${req.user.jsonToken}`)
        .then((response) => {
            res.render('superadmin/editarDivisa', { loggedUser: req.user, divisa: response.data });
        })
}
exports.post_editar_divisa = (req, res) => {
    let final = false
    if (req.body.active == "Activada") {
        final = true
    }
    let credentials = {
        code: req.body.code,
        description: req.body.description,
        active: final,
        token: req.user.jsonToken
    }
    console.log(credentials, "Estas son tus csredenciales");
    if (validateField(req.body.code) && validateField(req.body.description) && validateField(req.body.active)) {
        axios.post(`http://localhost:8000/divisas/${req.body.code}/update/`, credentials)
            .then((response) => {
                if (response.data == 'Error en los campos') {
                    res.render('superadmin/editarDivisa', { loggedUser: req.user, divisa: credentials, errorInformation: "Los campos no son válidos" })
                }
                else {
                    res.redirect(`/superadmin/${req.user.nombre}-${req.user.apellidos}/divisas`)
                }
            })
    }
    else {
        res.render('superadmin/crearDivisa', { loggedUser: req.user, divisa: credentials, errorInformation: "Campos no válidos" })
    }
}