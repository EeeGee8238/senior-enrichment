'use strict';

import React, {Component} from 'react';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import { Route } from 'react-router-dom';
import { fetchCampuses } from '../Store/campusStore';
import { fetchStudents } from '../Store/studentStore';
import store from '../store';
import Navbar from './Navbar';


class Main extends Component {

  componentDidMount() {
    const allCampusThunk = fetchCampuses();
    const allStudentsThunk = fetchStudents();
    store.dispatch(allStudentsThunk);
    store.dispatch(allCampusThunk);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={AllCampuses} />
        <Route path="/campuses/:campusId" component={SingleCampus} />
        <Route path="/students" component={AllStudents} />
      </div>
    );
  }
  }

export default Main;
