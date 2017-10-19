'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function AllStudents(props) {
  return (
    <div>
      <h3>Click to add a student</h3>
      <span>#</span><span>Name</span><span>Campus</span>
      <ol>
        {
          props.students && props.students.map(student =>
            (<li key={student.id}>{student.name}  {student.campus.name}</li>)
          )
        }
      </ol>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps)(AllStudents);
