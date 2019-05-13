exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("user_id");

    table.string("display_name").notNullable();

    table.string("google_uuid").unique();

    table.string("email").notNullable();

    table.string("profilePhoto").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
