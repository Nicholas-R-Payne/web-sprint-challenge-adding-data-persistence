
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects')
    .createTable('resources')
    .createTable('tasks')
};


exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
};
