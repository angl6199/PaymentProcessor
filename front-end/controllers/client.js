const axios = require('axios');

exports.get_pagos_realizados = (req, res) => {
    axios.get(process.env.BACK_URI + `/pagos/${req.user._id}/${req.user.jsonToken}`)
        .then((response) => {
            res.render('client/pagosRealizados', { loggedUser: req.user, objetos: response.data, environment: process.env.FRONT_URI });
        })
}
exports.get_pago = (req, res) => {
    axios.get(process.env.BACK_URI + `/pagos/getOne/${req.params.id}/${req.user.jsonToken}`)
        .then((response) => {
            res.render('client/verPago', { loggedUser: req.user, pago: response.data, environment: process.env.FRONT_URI });
        })

}

exports.get_abonos_recibidos = (req, res) => {
    axios.get(process.env.BACK_URI + `/pagos/abonos/${req.user._id}/${req.user.jsonToken}`)
        .then((response) => {
            res.render('client/abonosRecibidos', { loggedUser: req.user, objetos: response.data, environment: process.env.FRONT_URI });
        })
}
exports.get_abono = (req, res) => {
    axios.get(process.env.BACK_URI + `/pagos/getOne/${req.params.id}/${req.user.jsonToken}`)
        .then((response) => {
            res.render('client/verAbono', { loggedUser: req.user, pago: response.data, environment: process.env.FRONT_URI });
        })
}

exports.get_crear_orden = (req, res) => {
    axios.get(process.env.BACK_URI + `/divisas/getAll/${req.user.jsonToken}`)
        .then((response) => {
            res.render('client/crearOrden', { loggedUser: req.user, divisas: response.data, environment: process.env.FRONT_URI });
        })
}
exports.post_validar_orden = (req, res) => {
    let credentials = {
        emailOrdenante: req.user.email,
        emailBeneficiario: req.body.beneficiario,
        divisa: req.body.divisa,
        monto: req.body.monto
    }
    if (credentials.emailBeneficiario != "" && credentials.emailBeneficiario != undefined && credentials.divisa != "" && credentials.divisa != undefined && credentials.monto != "" && credentials.monto != undefined) {
        if (credentials.divisa != 'MXN') {
            const options = {
                method: 'GET',
                url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
                params: { format: 'json', from: credentials.divisa, to: 'MXN', amount: credentials.monto },
                headers: {
                    'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
                    'X-RapidAPI-Key': '01f87aae1cmsh6698e80e1a7a55ep19aa51jsn96677e0c226c'
                }
            };

            axios.request(options).then(function (response) {
                let precioPorDivisaRed = parseFloat(response.data.rates.MXN.rate)
                precioPorDivisaRed = precioPorDivisaRed.toFixed(2)

                let divisaApesosRed = parseFloat(response.data.rates.MXN.rate_for_amount)
                divisaApesosRed = divisaApesosRed.toFixed(2)

                res.render('client/crearOrden', { loggedUser: req.user, final: true, divisas: [credentials.divisa], precioPorDivisa: precioPorDivisaRed, divisaApesos: divisaApesosRed, lastform: credentials, environment: process.env.FRONT_URI })
            }).catch(function (error) {
                console.error(error);
            });
        }
        else {
            res.render('client/crearOrden', { loggedUser: req.user, final: true, divisas: [credentials.divisa], precioPorDivisa: 100, divisaApesos: 1000, lastform: credentials, environment: process.env.FRONT_URI })
        }
    }
    else {
        axios.get(process.env.BACK_URI + `/divisas/getAll/${req.user.jsonToken}`)
            .then((response) => {
                res.render('client/crearOrden', { loggedUser: req.user, divisas: response.data, errorInformation: "Error en los campos", environment: process.env.FRONT_URI });
            })
    }
}
exports.post_crear_orden = (req, res) => {
    let precioPorDivisaVariable = req.body.precioPorDivisa
    if (precioPorDivisaVariable == "No aplica") {
        precioPorDivisaVariable = 1
    }

    let credentials = {
        emailOrdenante: req.user.email,
        emailBeneficiario: req.body.beneficiario,
        monto: req.body.monto,
        divisaApesos: req.body.divisaApesos,
        divisa: req.body.divisa,
        precioPorDivisa: precioPorDivisaVariable,
        token: req.user.jsonToken
    }
    axios.post(process.env.BACK_URI + `/pagos/create`, credentials)
        .then((response) => {
            if (response.data == 'Fondos insuficientes') {
                axios.get(process.env.BACK_URI + `/divisas/getAll/${req.user.jsonToken}`)
                    .then((response) => {
                        res.render('client/crearOrden', { loggedUser: req.user, divisas: response.data, errorInformation: "No cuentas con fondos suficientes", environment: process.env.FRONT_URI });
                    })
            }
            if (response.data == 'No hay beneficiario') {
                axios.get(process.env.BACK_URI + `/divisas/getAll/${req.user.jsonToken}`)
                    .then((response) => {
                        res.render('client/crearOrden', { loggedUser: req.user, divisas: response.data, errorInformation: "Beneficiario no válido", environment: process.env.FRONT_URI });
                    })
            }
            else if (response.status === 200 && response.data !== 'No hay beneficiario' && response.data !== 'Fondos insuficientes') {
                res.redirect(`/cliente/${req.user.nombre}-${req.user.apellidos}/pagos-realizados`)
            }
        })
}