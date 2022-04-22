// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
const Project = require('../project/model')

router.get('/', (req, res, next) => {
    Task.getTasks()
    Project.getProjects()
      .then(tasks => {
        let resp = tasks.map((task) => {
          return {
            task_description: task.task_description,
            task_name: task.task_notes,
            task_completed: Boolean(task.task_completed)
          };
        });
        res.status(200).json(resp);
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