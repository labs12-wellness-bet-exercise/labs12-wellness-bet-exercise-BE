exports.up = function(knex, Promise) {
  return knex.schema.createTable("group_participants", table => {
    table.increments("group_participants_id");

    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users");

    table
      .integer("group_id")
      .unsigned()
      .notNullable()
      .references("group_id")
      .inTable("groups");

    table
      .boolean("paid")
      .defaultTo(false)
      .notNullable();

    table.string("buyin_proof").defaultTo(null);

    table
      .boolean("admin")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("group_participants");
};
