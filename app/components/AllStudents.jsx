'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/studentReducer';

function AllStudents(props) {
  return (
    <div>
      <div>
        <Link to={'/students/add'}>
          <div>
            <h3>Click to add a student</h3>
            <button type="button">+</button>
          </div>
        </Link>
      </div>
      <div>
        <span>#</span><span>Name</span><span>-----</span><span>Campus</span>
      </div>
      <ol>
        {
          props.students && props.students.map(student =>
            (
              <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <li>{student.name}<span>-------</span>{student.campus.name}</li>
                </Link>
                <button onClick={(event) => {props.destroyStudent(student.id);}}>X Delete {student.name}</button>

              </div>
            )
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

const mapDispatchToProps = (dispatch) => {
  return {
    destroyStudent: (studentId) => {
      dispatch(removeStudent(studentId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
