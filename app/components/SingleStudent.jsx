'use strict';

import React from 'react';
import { connect } from 'react-redux';

function SingleStudent(props) {
  const studentId = +props.match.params.studentId;
  const selectedStudent = props.students.find((student) => {
    return student.id === studentId;
  });

  console.log(selectedStudent)
  return (
    <div>
      <h1>{selectedStudent.name}</h1>
      <h1>{selectedStudent.email}</h1>
      <h1>{selectedStudent.campus.name}</h1>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(SingleStudent);

