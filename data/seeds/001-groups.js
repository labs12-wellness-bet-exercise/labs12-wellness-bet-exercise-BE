exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex("groups")
    .del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex("groups").insert({
          group_name: "Group 1",
          buy_in_amount: 100.0,
          start_date: "Jan 1, 2020",
          end_date: "Jan 30, 2020",
          join_code: "BUGS",
          group_message: "Welcome to Group 1",
          pot_total: 1000.0
        }),
        knex("groups").insert({
          group_name: "Group 2",
          buy_in_amount: 200.0,
          start_date: "Feb 1, 2020",
          end_date: "Feb 30, 2020",
          join_code: "BUGS2",
          group_message: "Welcome to Group 2",
          pot_total: 2000.0
        }),
        knex("groups").insert({
          group_name: "Group 3",
          buy_in_amount: 300.0,
          start_date: "Mar 1, 2020",
          end_date: "Mar 30, 2020",
          join_code: "BUGS3",
          group_message: "Welcome to Group 3",
          pot_total: 3000.0
        })
      ]);
    });
};
