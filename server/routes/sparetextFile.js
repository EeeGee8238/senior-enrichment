// Campus.findOrCreate(req.body)
// .spread((createdCampus, creationBool) => {
//   if (creationBool === false) {
//     res.sendStatus(409);
//   } else {
//     res.status(201).json(createdCampus);
//   }
// })
// .catch(next);
// });

// ???Better off sorting students by campus on front end, or back end???

//I want the user to be able to create a student with an associated campus but not have to enter the campus id, just the campus name. How do I cope with that in my backend?


// console.log(req.body);
// Campus.findOne(
//  {where:
//   {id: req.body.campusId}})
// .then(campus => {
//   return Student.create(req.body)
//   .then(student => {
//     return student.setCampus(campus);
//   });
// })
// .then(student => res.status(201).json(student))
// .catch(next);
