const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    identificador: {type: String, required: true},
    titulo: {type: String, required: true},
    coleccion: {type: String, required: true},
    categoria: {type: String, required: true},
    sinopsis: {type: String, required: true},
    video: {type: String, required: true},
});

module.exports = Movie = mongoose.model('Movie', movieSchema);