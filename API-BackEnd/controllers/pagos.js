const Pago = require('../models/pago')
const Usuario = require('../models/usuario')


exports.pagos_list = (req, res)=>{
    var ObjectId = require('mongoose').Types.ObjectId; 

    Pago.find({_ordenanteId: new ObjectId(req.params.id)}, function(err, pagos){
        res.send(pagos)
    })
}

exports.abonos_list = (req, res)=>{
    var ObjectId = require('mongoose').Types.ObjectId; 

    Pago.find({_beneficiarioId: new ObjectId(req.params.id)}, function(err, pagos){
        res.send(pagos)
    })
}

exports.pago_por_Id = (req, res)=>{
    Pago.findById(req.params.id, function(err, pago){
        res.send(pago)
    })
}


exports.pago_create = (req, res) =>{
    Usuario.findOne({email: req.body.emailOrdenante}, function(err, ordenante){
        if (err) res.status(500).json(err)
        Usuario.findOne({email: req.body.emailBeneficiario}, function(err, beneficiario){
            if (err) res.status(501).json(err)
            if(ordenante != null && beneficiario != null){
                if (ordenante.fondos > req.body.monto){
                    substractFunds(ordenante, req.body.monto)
                        addFunds(beneficiario, req.body.monto)
                            let pago = Pago.createInstance(ordenante._id, beneficiario._id, req.body.monto, "Completado")
                            Pago.add(pago)
                            res.status(200).json("Pago realizado correctamente")
                }else{
                    res.status(502).json("Fondos insuficientes")
                }
            }else{
                res.status(503).json("Beneficiario no encontrado")
            }
        })
    })
    
}

function addFunds (beneficiario, monto){
        let newValues = {fondos: beneficiario.fondos + monto}
        Usuario.findByIdAndUpdate(beneficiario.id, newValues, function(err, i){
            return true
        })
}

function substractFunds (ordenante, monto){
        let newValues = {fondos: ordenante.fondos - monto}
        Usuario.findByIdAndUpdate(ordenante.id, newValues, function(err, i){
            return true
        })
}