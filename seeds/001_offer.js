exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('offer').del()
    .then(function () {
      // Inserts seed entries
      return knex('offer').insert([
        {name: '25% off your purchase on the first of never.'}
      ])
    })
}
