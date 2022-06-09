const Divisa = require('../models/divisa')

exports.divisas_list = (req, res) => {
    Divisa.find({}, function (err, divisas) {
        res.send(divisas)
    })
}
exports.divisa = (req, res) => {
    Divisa.findOne({ code: req.params.code }, function (err, divisa) {
        if (err) res.json(err)
        res.send(divisa)
    })
}
exports.divisa_create = (req, res) => {
    console.log(req.body.code, "Codigo");
    console.log(req.body.description, "Descripcion");
    console.log(req.body.active, "Activo");
    console.log(checkNationalCentralBankCurrencySyntaxis(req.body.code), "Funcion");
    if (req.body.code == '' || req.body.code == undefined || req.body.description == '' || req.body.description == undefined || req.body.active == undefined || checkNationalCentralBankCurrencySyntaxis(req.body.code) == false) {
        res.json('Error en los campos')
    }
    else {
        Divisa.findOne({ code: req.body.code }, function (err, encontrado) {
            if (encontrado == null) {
                let divisa = Divisa.createInstance(req.body.code, req.body.description, req.body.active)
                Divisa.add(divisa)
                res.json(divisa)
            } else {
                res.json('Divisa ya existe')
            }
        })
    }

}
function checkNationalCentralBankCurrencySyntaxis(currency) {
    let currencies = ["USD", "JPY", "BGN", "AUD", "CAD", "EUR", "GBP", "CNH", "RUB", "BRL"]
    let flag = false
    currencies.forEach(element => {
        if (element == currency) {
            flag = true
        }
    })
    return flag
}

exports.update_Divisa = (req, res) => {
    let data = { code: req.params.code, description: req.body.description, active: req.body.active }
    if (req.body.description == '' || req.body.description == undefined || req.body.active == undefined) {
        res.json('Error en los campos')
    }
    else {
        Divisa.findOneAndUpdate({ code: req.params.code }, data, function (err, divisa) {
            if (err) res.json(err)
            res.json(divisa)
        })
    }
}