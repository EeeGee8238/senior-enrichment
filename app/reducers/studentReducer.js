import axios from 'axios';


//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
// const WRITE_STUDENT_NAME = 'WRITE_STUDENT_NAME';
// const GET_STUDENT = 'GET_STUDENT';


//ACTION CREATORS
export function getStudents(students) {
  return {type: GET_STUDENTS, students};
}

// export function writeStudentName(studentName) {
//   return {type: WRITE_STUDENT_NAME, studentName};
// }

// export function getStudent(student) {
//   return {type: GET_STUDENT, student};
// }

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

// export function postStudent(newStudent) {
//   return function thunk(dispatch) {
//     return axios.post('/api/channel', newStudent)
//     .then(res => res.data)
//     .then(createdStudent => {
//       const action = getStudent(createdStudent);
//       dispatch(action);
//     });
//   };
// }
//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
    return action.students;
  default:
    return state;
  }
}
