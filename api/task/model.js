// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks as ta')
      .leftJoin('projects as pr', 'pr.project_id', 'ta.project_id')
      .select(
          'ta.task_id',
          'ta.task_description',
          'ta.task_notes',
          'ta.task_completed',
          'pr.project_name',
          'pr.project_description'
      );
}

module.exports = { getTasks }