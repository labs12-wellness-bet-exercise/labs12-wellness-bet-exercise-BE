# labs12-wellness-bet-exercise-BE
 


 ** users table

| name of field | data type | notes |
| ------------- |:-------------:| -----:|
| id | integer | auto-generated |
| full_name | varchar | character limit: 255 | 
| password | varchar |  character limit: 255 | 
| email | varchar | character limit: 255 | 
| profilePhoto | varchar | character limit: 255 |
| created_at | timestamp/date | defaults to now |  

 ** group_participants table 

 | name of field | data type | notes |
 | ------------- |:-------------:| -----:|
 | id | integer | auto-generated | 
 | user_id | integer | foreign key referring to id on 'users' table |
  | group_id | integer | foreign key referring to id on 'groups' table | 
  | paid | boolean | defaults to false | 
  | admin | boolean | defaults to false | 
  | venmoPhoto | string/varchar | character limit: 255 | 


 
