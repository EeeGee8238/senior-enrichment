'use strict';

const studentRouter = require('express').Router();
const Student = require('../../db/models/campus');
const Campus = require('../../db/models/campus');

module.exports = studentRouter;

studentRouter.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

studentRouter.param('studentId', (req, res, next, id) => {
  Student.findById(id)
  .then(requestedStudent => {
    if (!requestedStudent) {
      const err = new Error('Student Not Found');
      err.status = 404;
      throw err;
    }
    req.requestedStudent = requestedStudent;
    next();
  })
  .catch(next);
});

studentRouter.get('/:studentId', (req, res, next) => {
  res.json(req.requestedStudent);
});

studentRouter.post('/', (req, res, next) => {
 Campus.findOne(
   {where:
    {campusId: req.body.campusId}})
  .then(campus => {
    return Student.create(req.body)
  .then(student => {
    return student.setCampus(campus);
  });
})
.then(student => res.status(201).json(student))
.catch(next);
});

studentRouter.put('/:studentId', (req, res, next) => {
  req.requestedStudent.update(req.body)
  .then(updatedStudent => res.status(200).json(updatedStudent))
  .catch(next);
});

studentRouter.delete('/:studentId', (req, res, next) => {
  req.requestedStudent.destroy()
  .then(() => res.status(204).end())
  .catch(next);
});
