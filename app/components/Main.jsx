'use strict';

import React, {Component} from 'react';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import SingleCampus from './SingleCampus';
import CreateStudent from './CreateStudent';
import CreateCampus from './CreateCampus'
import { Route, Switch } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campusReducer';
import { fetchStudents } from '../reducers/studentReducer';
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
        <Switch>
          <Route exact path="/" component={AllCampuses} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/add" component={CreateStudent} />
          <Route path="/campus/add" component={CreateCampus} />
        </Switch>
      </div>
    );
  }
  }

export default Main;
