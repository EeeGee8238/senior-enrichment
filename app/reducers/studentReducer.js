import axios from 'axios';


//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';

//ACTION CREATORS
export function getStudents(students) {
  return {type: GET_STUDENTS, students};
}

export function addStudent(newStudent) {
  return {type: ADD_STUDENT, newStudent}
}

//THUNK CREATORS
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/student')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students);
      dispatch(action);
    });
  };
}

export function postStudent(newStudent) {
  return function thunk(dispatch) {
    return axios.post('/api/student', newStudent)
    .then(res => res.data)
    .then(createdStudent => {
      const action = addStudent(createdStudent);
      dispatch(action);
    });
  };
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case ADD_STUDENT:

      return [...state, action.newStudent];

  default:
    return state;
  }
}
