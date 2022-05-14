const mongoose = require('mongoose')
let Schema = mongoose.Schema

var pagoSchema = new Schema({
    _ordenanteId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    _beneficiarioId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    monto: { type: Number, required: true },
    estado: { type: String, trim: true, required: true }
})

pagoSchema.statics.createInstance = function (_ordenanteId, _beneficiarioId, monto, estado) {
    return new this({
        _ordenanteId: _ordenanteId,
        _beneficiarioId: _beneficiarioId,
        monto: monto,
        estado: estado
    })
}

pagoSchema.statics.add = function (aPago, cb) {
    this.create(aPago, cb)
}

module.exports = mongoose.model('Pagos', pagoSchema) 