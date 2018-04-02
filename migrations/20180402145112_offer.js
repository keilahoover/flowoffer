
exports.up = function(knex, Promise) {
  return knex.schema.createTable('offer', (table) => {
    table.increments()
    table.varchar('name', 255)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('offer')
};
