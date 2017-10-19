import axios from 'axios';

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';

//ACTION CREATORS
export function getStudents (students) {
  return {type: GET_STUDENTS, students};
}

//THUNK CREATORS
export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/student')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students);
      dispatch(action);
    });
  };
}

//REDUCER
export default function renducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
    return action.students;
  default:
    return state;
  }
}
