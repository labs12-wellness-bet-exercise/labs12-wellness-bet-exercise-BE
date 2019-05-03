exports.up = function(knex, Promise) {
  return knex.schema.createTable("group_participants", table => {
    table.increments();

    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users");

    table
      .integer("group_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("groups");

    table
      .boolean("paid")
      .defaultTo(false)
      .notNullable();

    table.string("venmoPhoto").notNullable();

    table
      .boolean("admin")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("group_participants");
};
