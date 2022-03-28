const bcrypt = require('bcryptjs')
let pass1 = 'asdf'
let pass2 = 'qwer'
pass1 = bcrypt.hashSync(pass1, 10);
pass2 = bcrypt.hashSync(pass2, 10);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Angel', apellidos: 'Heredia Vazquez', email: 'angl.vaz4566@gmail.com', rol: 'Superadmin', password: pass1},
        { name: 'Carlos Andres', apellidos: 'Conde Besil', email: 'carlos.conde@gmail.com', rol: 'Admin', password: pass2},
      ]);
    });
};