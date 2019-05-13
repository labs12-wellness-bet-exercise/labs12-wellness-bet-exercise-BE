exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("user_id");

    table.string("first_name").notNullable();

    table.string("last_name").notNullable();

    table.string("google_uuid").unique();

    table.string("email").notNullable();

    table.string("profilePhoto").notNullable();

    // table
    //   .timestamp("created_at")
    //   .defaultTo(knex.fn.now())
    //   .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
