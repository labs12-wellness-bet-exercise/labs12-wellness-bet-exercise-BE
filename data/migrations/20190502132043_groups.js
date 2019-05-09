// this function randomly generates a string of numbers and/or letters, which will comprise the join_code. The join_code is set to automatically default to the random output of this function. It is possible that the table could throw an error if this code randomly generates the same code twice because of the .unique(), but that is desired behavior because the program would get confused by a person joining two groups with the same join code. The probability of that happening is unlikely, but if it does, the table will throw a SQL constraint error if that happens. - MJ
const generateJoinCode = () => {
  let joinCode = Math.random()
    .toString(36)
    .replace("0.", "");
  return joinCode;
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable("groups", table => {
    table.increments("group_id");

    // table.integer("id")
    // .notNullable();

    table.string("group_name").notNullable();

    table.float("buy_in_amount").notNullable();

    table.string("start_date").notNullable();

    table.string("end_date").notNullable();

    table
      .string("join_code")
      .notNullable()
      .defaultTo(generateJoinCode())
      .unique();


    table.string("group_message").notNullable();

    table
      .string("group_photo")
      .notNullable()
      .defaultTo(
        "https://images.unsplash.com/photo-1539966903171-89770f33f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      );

    table.float("pot_total");

    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();

    table
      .integer("admin_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("groups");
};
