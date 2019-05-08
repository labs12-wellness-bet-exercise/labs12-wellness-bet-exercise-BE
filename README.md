# labs12-wellness-bet-exercise-BE

## users table

| name of field | data type | notes |
| ------------- |:-------------:| -----:|
| id | integer | auto-generated |
| full_name | varchar | character limit: 255 |
| password | varchar |  character limit: 255 |
| email | varchar | character limit: 255 |
| profilePhoto | varchar | character limit: 255 |
| created_at | timestamp/date | defaults to now |  

## Users Endpoints

- `.get` to `/api/users/` returns an array all users in the database
- `.get` to `/api/users/:id` returns one user by id

## group_participants table

 | name of field | data type | notes |
 | ------------- |:-------------:| -----:|
 | id | integer | auto-generated |
 | user_id | integer | foreign key referring to id on 'users' table |
  | group_id | integer | foreign key referring to id on 'groups' table |
  | paid | boolean | defaults to false |
  | admin | boolean | defaults to false |
  | venmoPhoto | string/varchar | character limit: 255 |

## groups table

 | name of field | data type | notes |
 | ------------- |:-------------:| -----:|
 | id | integer | auto-generated |
 | user_id | integer | foreign key referring to id on 'users' table |
 | group_name | string | notNullable |
 | buy_in_amount | float | notNullable |
 | start-date | string | notNullable |
 | end-date | string | notNullable |
 | join-code | string | notNullable |
 | group_message | string | notNullable |
 | group_photo | string | defaults to https://images.unsplash.com/photo-1539966903171-89770f33f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 |
 | pot_total | float | notNullable |
 | created_at | timestamp | automatically generated, notNullable |

## Groups Endpoints

- `.get` to `/api/groups/` returns an array of all groups from all users in the database
- `.get` to `/api/groups/:id` returns an array of all trips from all users in the database 

## Group Photo Endpoints 
- `.get` to `/api/groups/groupphoto/:id` returns the group photo by group id. 
- `.put` to `/api/groups/groupphoto/:id` changes the group photo. It expects the req.body to have a key of group_photo with a string value (link to photo). 
- `.put` to `/api/groups/groupphoto/:id/default` switches the photo back to the default group photo image. 
- `.put` to `/api/groups/groupphoto/:id/delete` removes the group photo and replaces it with the string 'group photo does not exist'. 
