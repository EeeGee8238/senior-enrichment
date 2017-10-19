'use strict';

import React, { Component } from 'react';
import { postStudent } from '../reducers/studentReducer';
import { connect } from 'react-redux';

class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    studentInputValue: '',
    emailInputValue: '',
    campusInputValue: ''
    };

    this.handleStudentChange = this.handleStudentChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
  }

  handleStudentChange (event) {
    this.setState({
      studentInputValue: event.target.value
    });
  }

  handleEmailChange (event) {
    this.setState({
      emailInputValue: event.target.value
    });
  }

  handleCampusChange (event) {
    this.setState({
      campusInputValue: event.target.value
    });
  }



  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} >
          <h3>Enter Student</h3>
            <input
            name="name"
            onChange={this.handleStudentChange}
            value={this.state.studentInputValue}
            placeholder="Student Name" />
          <h3>Enter Email</h3>
            <input
            name="email"
            onChange={this.handleEmailChange}
            value={this.state.emailInputValue}
            placeholder="Student Email" />
          <h3>Select a Campus</h3>
            <select name="campus" onChange={this.handleCampusChange}>
              {
                this.props.campuses.map(campus => {
                  return (<option key={campus.id} value={campus.id}>{campus.name}</option>);
                })
              }
            </select>
        <button type="submit">Sumbit Student</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const campusId = event.target.campus.value;
      dispatch(postStudent({ name, email, campusId }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent);
