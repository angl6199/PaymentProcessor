const mongoose = require('mongoose')
let Schema = mongoose.Schema

var divisaSchema = new Schema({
    code: { type: String, trim: true, unique:true, uppercase:true, required: true },
    description: { type: String, trim: true, required: true },
    active: {type: Boolean, default: true}
})

divisaSchema.statics.createInstance = function (code, description, active) {
    return new this({
        code: code,
        description: description,
        active: active
    })
}

divisaSchema.statics.add = function (aDivisa, cb) {
    this.create(aDivisa, cb)
}

module.exports = mongoose.model('Divisas', divisaSchema)