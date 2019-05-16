exports.up = function(knex, Promise) {
  return knex.schema.createTable("steps", table => {
    table.increments("steps_id");

    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users");

    table.timestamp("created_at").defaultTo(knex.fn.now());

    table.integer("step_count").unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("steps");
};
