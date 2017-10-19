'use strict';

import React from 'react';
import { connect } from 'react-redux';

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
          (<li key={student.id}>{student.name}</li>)
        )
      }
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

