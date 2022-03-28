/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bicis').del()
    .then(function () {
      // Inserts seed entries
      return knex('bicis').insert([
        { modelo: 'Ghost Claw R29', color: 'Negro', lat: 19.345370, lon: -99.160034 },
        { modelo: 'Mercurio Crow R29', color: 'Naranja', lat: 19.353185, lon: -99.157244 },
      ]);
    });
};