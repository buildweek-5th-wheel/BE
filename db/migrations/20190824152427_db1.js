
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments();

        users
          .string('username', 128)
          .notNullable()
          .unique();
        users.string('password', 128)
            .notNullable();
        users.boolean('landowner')
            .notNullable();
        users
            .string("image_url", 500)
        users
            .text('bio')
        users
            .text('email')
        users
            .text('telephone')
      })
      .createTable('listings', listings => {
          listings
            .increments('listing_id');
          listings
            .string('listing_name')
            .unique()
            .notNullable()
          listings
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
         listings
            .string("image_url", 500)
          listings
            .text("description")
          listings
            .text("address")
         listings
            .timestamps(true, true)
         listings
            .float('lng',10,6)
         listings
            .float('lat',10,6)
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('listings')
        .dropTableIfExists('users');
};
