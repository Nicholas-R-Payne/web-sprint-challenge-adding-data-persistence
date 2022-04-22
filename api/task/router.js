// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
  Task.getTasks()
      .then(tasks => {
        let resp = tasks.map((task) => {
          return {
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: Boolean(task.task_completed),
            project_name: task.project_name,
            project_description: task.project_description
          }
        })
        res.status(200).json(resp);
      })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Task.createTask(req.body)
    .then(task => {
      let resp = {
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: Boolean(task.task_completed),
        project_name: task.project_name,
        project_description: task.project_description
      }
      res.status(200).json(resp)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router