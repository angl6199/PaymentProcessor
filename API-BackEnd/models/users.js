const knex = require('../database/connection');
const bcrypt = require('bcryptjs')

module.exports = {
    crearUsuario,
    validarUsuario
};

//Obtener todos los usuarios----------------------------------


//Añadir nuevo usuario--------------------------------
async function crearUsuario(reqbody) {
    const [respuesta] = await knex('users').insert(reqbody);

    return respuesta;
}

//Validar usuario------------------------------------
async function validarUsuario(reqbody){
    const preUsuario = await knex('*').from('users').where('email', reqbody.email);

    if (preUsuario.length != 0) {
        const usuario = preUsuario[0];

        if (bcrypt.compareSync(reqbody.password, usuario.password)) {
            let respuesta = {
                name: usuario.name,
                apellidos: usuario.apellidos,
                email: usuario.email,
                rol: usuario.rol,
            }
            return respuesta;
        } else{
            console.log('Contrasena invalida');
            console.log(reqbody.password);
            console.log(usuario.password);
            return false
        }
    } else{
        console.log('Usuario no existe');
        return false
    }
}