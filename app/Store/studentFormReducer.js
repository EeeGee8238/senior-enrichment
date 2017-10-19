import axios from 'axios';


//ACTION TYPES
const WRITE_STUDENT_NAME = 'WRITE_STUDENT_NAME';

//ACTION CREATORS

export function writeStudentName(studentName) {
  return {type: WRITE_STUDENT_NAME, studentName};
}


const initialState = {
  name: "",
  email: "",
  campus: ""
},


//REDUCER
export default function reducer (state = initialState, action) {
  switch (action.type) {
    const newState = Object.assign({}, state);

    case WRITE_STUDENT_NAME:
      newState.name = action.studentName
      return newState;
  default:
    return state;
  }
}
