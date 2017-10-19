'use strict';

import React, { Component } from 'react';

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render () {
    return (
      <div>
        <h3>Enter Student</h3>
        <form>
          <input onChange={this.handleChange} placeholder="Student Name" />
        </form>
        <h3>Enter Email</h3>
        <form>
          <input placeholder="Student Email" />
        </form>
        <select>
          <option>Cornell</option>
          <option>Scranton</option>
          <option>NYU</option>
        </select>
      </div>
    );
  }

}

