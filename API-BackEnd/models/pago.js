const mongoose = require('mongoose')
let Schema = mongoose.Schema

var pagoSchema = new Schema({
    _ordenanteId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    _beneficiarioId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    monto: { type: Number, required: true },
    divisa: { type: String, trim: true, required: true },
    precioPorDivisa: { type: Number, required: true, default:1.0},
    divisaApesos: { type: Number, required: true },
    estado: { type: String, trim: true, required: true }
})

pagoSchema.statics.createInstance = function (_ordenanteId, _beneficiarioId, monto, divisa, precioPorDivisa, divisaApesos, estado) {
    return new this({
        _ordenanteId: _ordenanteId,
        _beneficiarioId: _beneficiarioId,
        monto: monto,
        divisa: divisa,
        precioPorDivisa: precioPorDivisa,
        divisaApesos: divisaApesos,
        estado: estado
    })
}

pagoSchema.statics.add = function (aPago, cb) {
    this.create(aPago, cb)
}

module.exports = mongoose.model('Pagos', pagoSchema) 