const knex = require('../database/connection');

module.exports = {
    crearBici,
    obtenerBicis,
    borrarBici,
    editarBici,
    obtenerBiciPorId
};

//Listar las bicicletas---------------------------------
async function obtenerBicis() {
    const respuesta = await knex.select('*').from('bicis');
    
    return respuesta;
}

//Buscar bicileta----------------------------------
async function obtenerBiciPorId(id){
    const respuesta = await knex('*').from('bicis').where('id', id);

    return respuesta[0];
}

//Añadir nueva bicicleta--------------------------------
async function crearBici(reqbody) {
    const [respuesta] = await knex('bicis').insert(reqbody);

    return respuesta;
}

//Eliminar bicicleta-----------------------------------
async function borrarBici(id) {
    const respuesta = await knex('bicis').where('id', id).del();

    return respuesta;
}

//Actualizar bicileta----------------------------------
async function editarBici(reqbody) {
    const respuesta = await knex('bicis').where('id', reqbody.id).update(reqbody);

    return respuesta;
}