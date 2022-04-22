// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
      .then(resources => {
        let resp = resources.map((resource) => {
          return {
            resource_name: resource.resource_name,
            resource_description: resource.resource_description
          };
        });
        res.status(200).json(resp);
      })
      .catch(next)
})

module.exports = router