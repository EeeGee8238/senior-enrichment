'use strict';

import axios from 'axios';

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//ACTION CREATORS
function getCampuses (campuses) {
  return {type: GET_CAMPUSES, campuses};
}

function addCampus(newCampus) {
  return {type: ADD_CAMPUS, newCampus};
}

function deleteCampus(campusId) {
  return {type: DELETE_CAMPUS, campusId};
}

//THUNK CREATORS
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campus')
    .then(res => res.data)
    .then(campuses => {
      const action = getCampuses(campuses);
      dispatch(action);
    })
    .catch(console.error.bind(console));
  };
}

export function postCampus(newCampus) {
  return function thunk(dispatch) {
    return axios.post('/api/campus', newCampus)
    .then(res => res.data)
    .then(createdCampus => {
      const action = addCampus(createdCampus);
      dispatch(action);
    })
    .catch(console.error.bind(console));
  };
}

export function removeCampus(campusId) {
  return function thunk(dispatch) {
    const action = deleteCampus(campusId);
    dispatch(action);
    return axios.delete(`/api/campus/${campusId}`)
    .catch(console.error.bind(console));
  };
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...state, action.newCampus];

    case DELETE_CAMPUS:
      return state.filter(campus => {
        return campus.id !== action.campusId;
      });

    default:
      return state;
  }
}
