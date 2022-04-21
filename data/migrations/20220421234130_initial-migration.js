
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name') .notNullable()
      tbl.string('project_description')
      tbl.integer('project_completed').notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments()    
      })
    .createTable('tasks', tbl => {
        tbl.increments()    
      })
};


exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
};
