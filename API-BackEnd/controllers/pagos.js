const Pago = require('../models/pago')
const Usuario = require('../models/usuario')

exports.pagos_list = (req, res) => {
    var ObjectId = require('mongoose').Types.ObjectId;

    Pago.find({ _ordenanteId: new ObjectId(req.params.id) }, function (err, pagos) {
        res.send(pagos)
    })
}

exports.abonos_list = (req, res) => {
    var ObjectId = require('mongoose').Types.ObjectId;

    Pago.find({ _beneficiarioId: new ObjectId(req.params.id) }, function (err, pagos) {
        res.send(pagos)
    })
}

exports.pago_por_Id = (req, res) => {
    Pago.findById(req.params.id, function (err, pago) {
        res.send(pago)
    })
}

exports.pago_create = (req, res) => {
    Usuario.findOne({ email: req.body.emailOrdenante }, function (err, ordenante) {
        if (err) res.status(500).json(err)
        Usuario.findOne({ email: req.body.emailBeneficiario }, function (err, beneficiario) {
            if (err) res.status(501).json(err)
            if (ordenante != null && beneficiario != null) {
                if (ordenante.fondos > req.body.divisaApesos) {
                    substractFunds(ordenante, req.body.divisaApesos)
                    addFunds(beneficiario, req.body.divisaApesos)
                    let pago = Pago.createInstance(ordenante._id, beneficiario._id, req.body.monto, req.body.divisa, req.body.precioPorDivisa, req.body.divisaApesos, "Completado")
                    Pago.add(pago)
                    res.status(200).json("Pago realizado correctamente")
                } else {
                    res.json("Fondos insuficientes")
                }
            } else {
                res.json("No hay beneficiario")
            }
        })
    })

}

function addFunds(beneficiario, monto) {
    monto = parseFloat(monto)
    console.log(beneficiario, "A ESTE SE LE VAN A AGREGAR");
    console.log(beneficiario.id, "ESTE ES EL ID AL QUE AGREGA");
    console.log(monto, "ESTE ES EL MONTO A AGREGAR");
    console.log(beneficiario.fondos, "ESTOS SON LOS FONDOS");
    console.log(beneficiario.fondos , "ESTE ES EL RESULTADO DE LA SUMA");
    let newValues = { fondos: beneficiario.fondos + monto }
    Usuario.findByIdAndUpdate(beneficiario.id, newValues, function (err, i) {
        return true
    })
}

function substractFunds(ordenante, monto) {
    monto = parseFloat(monto)
    let newValues = { fondos: ordenante.fondos - monto }
    Usuario.findByIdAndUpdate(ordenante.id, newValues, function (err, i) {
        return true
    })
}