
exports.up = function(knex, Promise) {
    return knex.schema.createTable('group_participants', table => {
        table.increments(); 
    
        table.integer("user_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
        table.integer("group_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 
    
        table.boolean("paid")
        .toDefault(false)
        .notNullable();
    
        table.string('venmoPhoto')
        .notNullable(); 

        table.boolean("admin")
        .toDefault(false)
        .notNullable();
    
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('group_participants');
};
