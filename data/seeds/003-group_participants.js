exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("group_participants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("group_participants").insert([
        {
          user_id: 1,
          group_id: 1,
          paid: true,
          admin: true,
          venmoPhoto: "url of venmo photo"
        },
        {
          user_id: 2,
          group_id: 1,
          paid: true,
          admin: false,
          venmoPhoto: "url of venmo photo"
        },
        {
          user_id: 3,
          group_id: 1,
          paid: false,
          admin: false,
          venmoPhoto: "url of venmo photo"
        },
        {
          user_id: 1,
          group_id: 2,
          paid: false,
          admin: false,
          venmoPhoto: "url of venmo photo"
        },
        {
          user_id: 2,
          group_id: 2,
          paid: true,
          admin: true,
          venmoPhoto: "url of venmo photo"
        }
      ]);
    });
};
