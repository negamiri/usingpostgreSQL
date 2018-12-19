
exports.up = function(knex) {
    return knex.schema.table('milestones', (table) => {
        table.integer('famous_people_id').unsigned();
        table.foreign('famous_people_id').references('famous_people.id').onDelete('CASCADE');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('milestones', (table) =>{
        table.dropColumn('famous_people_id');
    });
  };