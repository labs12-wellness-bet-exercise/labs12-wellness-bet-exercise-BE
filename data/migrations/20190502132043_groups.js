exports.up = function(knex, Promise) {
  return knex.schema.createTable("groups", table => {
    table.increments("group_id");

    // table.integer("id")
    // .notNullable();

    table.string("group_name").notNullable();

    table.float("buy_in_amount").notNullable();

    table.string("start_date").notNullable();

    table.string("end_date").notNullable();

    table.string("join_code").notNullable();

    table.string("group_message").notNullable(); 

    table.string("group_photo").notNullable()
    .defaultTo('group photo does not exist');

    table.float("pot_total").notNullable();

    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("groups");
};
