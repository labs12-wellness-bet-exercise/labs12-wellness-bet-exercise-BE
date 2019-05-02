
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
    
        table.string("full_name")
        .notNullable();
    
        table.string("password")
        .notNullable(); 
    
        table.string("email")
        .notNullable();
    
        table.string("profilePhoto")
        .notNullable();
    
        table.timestamp("created_at")
        .defaultTo(knex.fn.now())
        .notNullable()
        
    })
    
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
