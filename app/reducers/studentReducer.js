'use strict';

import axios from 'axios';


//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//ACTION CREATORS
function getStudents(students) {
  return {type: GET_STUDENTS, students};
}

function addStudent(newStudent) {
  return {type: ADD_STUDENT, newStudent};
}

function deleteStudent(studentId) {
  return {type: DELETE_STUDENT, studentId};
}

//THUNK CREATORS
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/student')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students);
      dispatch(action);
    })
    .catch(console.error.bind(console));
  };
}

export function postStudent(newStudent) {
  return function thunk(dispatch) {
    return axios.post('/api/student', newStudent)
    .then(res => res.data)
    .then(createdStudent => {
      const action = addStudent(createdStudent);
      dispatch(action);
    })
    .catch(console.error.bind(console));
  };
}

export function removeStudent(studentId) {
  return function thunk(dispatch) {
    const action = deleteStudent(studentId);
    dispatch(action);
    return axios.delete(`/api/student/${studentId}`)
    .catch(console.error.bind(console));
  };
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case ADD_STUDENT:
      return [...state, action.newStudent];

    case DELETE_STUDENT:
      return state.filter(student => {
        return student.id !== action.studentId;
      });

  default:
    return state;
  }
}
