'use strict';

import { combineReducers } from 'redux';
import students from '../Store/studentStore';
import campuses from '../Store/campusStore';


//

const rootReducer = combineReducers(
  {
    students,
    campuses
  }
);


export default rootReducer;
