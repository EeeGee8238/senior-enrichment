'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function SingleStudent(props) {
  const studentId = +props.match.params.studentId;
  const selectedStudent = props.students.find((student) => {
    return student.id === studentId;
  });

  return (
    <div>
      <h1>{selectedStudent.name}</h1>
      <h1>{selectedStudent.email}</h1>
      <Link to={`/campuses/${selectedStudent.campus.id}`}>
        <h1>{selectedStudent.campus.name}</h1>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(SingleStudent);

