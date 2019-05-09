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
          group_photo: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/entertainment/5b2fefb9fae96f45b7000002.jpeg",
          pot_total: 1000.0
        }),
        knex("groups").insert({
          group_name: "Group 2",
          buy_in_amount: 200.0,
          start_date: "Feb 1, 2020",
          end_date: "Feb 30, 2020",
          join_code: "BUGS2",
          group_message: "Welcome to Group 2",
          group_photo: "https://fiftiesweb.com/tv/mod-squad-c.jpg",
          pot_total: 2000.0
        }),
        knex("groups").insert({
          group_name: "Group 3",
          buy_in_amount: 300.0,
          start_date: "Mar 1, 2020",
          end_date: "Mar 30, 2020",
          join_code: "BUGS3",
          group_message: "Welcome to Group 3",
          group_photo: "https://img.huffingtonpost.com/asset/5a4ef0931c0000f98768eb07.jpg?ops=scalefit_720_noupscale",
          pot_total: 3000.0
        })
      ]);
    });
};
