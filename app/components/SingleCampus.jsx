'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function SingleCampus(props) {
  const campusId = +props.match.params.campusId;
  const selectedStudents = props.students.filter(student => {
    return campusId === student.campusId;
  });
  const selectedCampus = props.campuses.find(campus => {
    return campusId === campus.id;
  });
  return (
    <div>
      <h3>Students at {selectedCampus && selectedCampus.name}</h3>
      <ol>
      {
        selectedStudents.map(student =>
          (

              <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <li>{student.name}</li>
                </Link>
              </div>

          )
        )}
      </ol>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

export default connect(mapStateToProps)(SingleCampus);

