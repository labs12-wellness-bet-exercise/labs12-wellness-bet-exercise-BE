# labs12-wellness-bet-exercise-BE

## users table

| name of field | data type |                                         notes |
| ------------- | :-------: | --------------------------------------------: |
| user_id       |  integer  |                                auto-generated |
| display_name  |  varchar  |                          character limit: 255 |
| google_uuid   |  varchar  | this is the connection with firebase oauth db |
| email         |  varchar  |                          character limit: 255 |
| profilePhoto  |  varchar  |                          character limit: 255 |

## Users Endpoints

- `.get` to `/api/users/` returns an array all users in the database
- `.get` to `/api/users/:id` returns one user by id
- `.post` to `/api/users/` expects an object with display_name, email, profilePhoto, and google_uuid.
- `.get` to `/api/users/userId/:google_uuid` expects an object with the google_uuid. It will return an object with the user_id.

## group_participants table

| name of field         |   data type    |                                               notes |
| --------------------- | :------------: | --------------------------------------------------: |
| group_participants_id |    integer     |                                      auto-generated |
| user_id               |    integer     |   foreign key referring to user_id on 'users' table |
| group_id              |    integer     | foreign key referring to group_id on 'groups' table |
| paid                  |    boolean     |                                   defaults to false |
| buyin_proof           | string/varchar |                                character limit: 255 |

## groups table

| name of field | data type |                                                                                                                                              notes |
| ------------- | :-------: | -------------------------------------------------------------------------------------------------------------------------------------------------: |
| id            |  integer  |                                                                                                                                     auto-generated |
| user_id       |  integer  |                                                                                                       foreign key referring to id on 'users' table |
| group_name    |  string   |                                                                                                                                        notNullable |
| buy_in_amount |   float   |                                                                                                                                        notNullable |
| start-date    |  string   |                                                                                                                                        notNullable |
| end-date      |  string   |                                                                                                                                        notNullable |
| join-code     |  string   |                                                                                                                                        notNullable |
| group_message |  string   |                                                                                                                                        notNullable |
| group_photo   |  string   | defaults to https://images.unsplash.com/photo-1539966903171-89770f33f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 |
| pot_total     |   float   |                                                                                                                                        notNullable |
| created_at    | timestamp |                                                                                                               automatically generated, notNullable |

## Groups Endpoints

- `.get` to `/api/groups/` returns an array of all groups from all users in the database
- `.get` to `/api/groups/:id` returns an array of all trips from all users in the database

## Group Photo Endpoints

- `.get` to `/api/groups/groupphoto/:id` returns the group photo by group id.
- `.put` to `/api/groups/groupphoto/:id` changes the group photo. It expects the req.body to have a key of group_photo with a string value (link to photo).
- `.put` to `/api/groups/groupphoto/:id/default` switches the photo back to the default group photo image.
- `.put` to `/api/groups/groupphoto/:id/delete` removes the group photo and replaces it with the string 'group photo does not exist'.

## Admin Message Endpoints

- `.get` to `/api/groups/adminmessage/:id` returns the group photo by group id.
- `.put` to `/api/groups/adminmessage/:id` changes the group photo. It expects the req.body to have a key of group_photo with a string value (link to photo).
- `.put` to `/api/groups/adminmessage/:id/default` switches the photo back to the default group photo image.
- `.put` to `/api/groups/adminmessage/:id/delete` removes the group photo and replaces it with the string 'group photo does not exist'.

## Group Join Code Endpoint

- `.get` to `/api/groups/:id/join_code` returns the join code by group id. This code is automatically generated in the table, so all logic to check for matches should be handled on the front end.

- `.get` to `/api/joincodes/` returns an array of objects with all the group_ids and join_codes.

- `.get` to `/api/joincodes/:join_code` returns the group_id associated with the specified join_code.

## Group Participants Endpoints

- `.post` to `/api/participants/` adds a group participant to the group_participants table. It requires a group_id and a user_id.
- `.get` to `/api/participants/` returns an array of the whole group participants table.
- `.get` to `/api/participants/:group_participants_id` returns the record for a group_participant buy their group_participants_id.
- `.get` to `/api/participants/members/:group_id` returns all the participants in a group.
- `.get` to `/api/participants/member/:user_id/:group_id` returns the group_participant record by user_id and group_id.

- `.get` to `/api/participants/paid/:user_id/:group_id` returns the paid status of a user in a specific group.
- `.put` to `/api/participants/paid/:user_id/:group_id/:paid` updates the paid status. In the params, put the paid status that you want it to update to. For example: `/api/participants/paid/1/1/true` would update the paid status of the User with user_id 1 in the group with group_id 1 to true.

- `.put` to `/api/buyinproof/:user_id/:group_id` updates OR adds the buyin_proof by user_id and group_id. It is null on the table if the record does not exist.
- `.put` to `/api/buyinproof/delete/:user_id/group_id` updates the table to change the buyin_proof back to null by user_id and group_id.
- `.get` to `/api/participants/buyinproof/:user_id/:group_id` returns the buyin_proof of a particular user in a group.

## Groups Listed By User_ID Endpoint

- `.get` to `/api/usergroups/:id` gets all of the groups associated with the user id.

## Users Listed By group_id Endpoint

- `.get` to `/api/usergroups/members/:group_id` gets all the users associated with a group_id.
