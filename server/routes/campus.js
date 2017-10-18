'use strict';

const campusRouter = require('express').Router();
const Campus = require('../../db/models/campus');

module.exports = campusRouter;


campusRouter.get('/', (req, res, next) => {
  Campus.findAll({})
  .then(campuses => res.json(campuses))
  .catch(next);
});

campusRouter.param('campusId', (req, res, next, id) => {
  Campus.findById(id)
  .then(requestedCampus => {
    if (!requestedCampus) {
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    }
    req.requestedCampus = requestedCampus;
    next();
  })
  .catch(next);
});

campusRouter.get('/:campusId', (req, res, next) => {
  res.json(req.requestedCampus);
});

campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(createdCampus => res.status(201).json(createdCampus))
  .catch(next);
});

campusRouter.put('/:campusId', (req, res, next) => {
  req.requestedCampus.update(req.body)
  .then(updatedCampus => res.status(200).json(updatedCampus))
  .catch(next);
  });

campusRouter.delete('/:campusId', (req, res, next) => {
  req.requestedCampus.destroy()
  .then(() => res.status(204).end())
  .catch(next);
});
