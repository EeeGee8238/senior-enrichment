'use strict';

import axios from 'axios';

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

//ACTION CREATORS
export function getCampuses (campuses) {
  return {type: GET_CAMPUSES, campuses};
}

export function addCampus(newCampus) {
  return {type: ADD_CAMPUS, newCampus};
}

//THUNK CREATORS
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campus')
    .then(res => res.data)
    .then(campuses => {
      const action = getCampuses(campuses);
      dispatch(action);
    });
  };
}

export function postCampus(newCampus) {
  return function thunk(dispatch) {
    return axios.post('/api/campus', newCampus)
    .then(res => res.data)
    .then(createdCampus => {
      const action = addCampus(createdCampus);
      dispatch(action);
    });
  };
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...state, action.newCampus];

    default:
      return state;
  }
}
