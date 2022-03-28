/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.shema
    .createTable('bicis', (table)=> {
        table.increments('id');
        table.string('modelo').notNullable();
        table.string('color').notNullable();
        table.decimal('lat', 10, 8).notNullable();
        table.decimal('lon', 11, 8).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('bicis');
};
