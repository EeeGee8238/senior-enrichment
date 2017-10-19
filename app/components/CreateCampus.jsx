'use strict';

import React, { Component } from 'react';
import { postCampus } from '../reducers/campusReducer';
import { connect } from 'react-redux';

class CreateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusNameInput: '',
      campusImageInput: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      campusNameInput: event.target.value
    });
  }

  handleImageChange(event) {
    this.setState({
      campusImageInput: event.target.value
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <h3>Enter Campus</h3>
            <input
            name="name"
            onChange={this.handleNameChange}
            value={this.state.campusNameInput}
            placeholder="Campus Name" />
          <h3>Enter Campus Image URL</h3>
            <input
              name="image"
              onChange={this.handleImageChange}
              value={this.state.campusImageInput}
              placeholder="Campus Image URL" />
          <button type="submit">Submit Campus</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const name = event.target.name.value;
      const image = event.target.image.value;
      dispatch(postCampus({ name, image}));
    }
  };
};

export default connect(null, mapDispatchToProps)(CreateCampus);

