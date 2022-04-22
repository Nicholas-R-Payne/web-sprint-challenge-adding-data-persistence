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

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return getTasks().where({ task_id }).first()
}

module.exports = { getTasks, createTask }