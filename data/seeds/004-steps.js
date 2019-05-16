exports.seed = function(knex, Promise) {
  return knex("steps").insert([
    { user_id: 1, step_count: 5000 },
    { user_id: 2, step_count: 20000 },
    { user_id: 3, step_count: 1200 }
  ]);
};
