const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    contrasena: {type: String, required: true},
    suscripcion1: {type: String, default: 'true'},
    suscripcion2: {type: String, default: 'false'}
});

module.exports = User = mongoose.model('User', userSchema);