'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function AllCampuses(props) {
  return (
    <div>
      <h2>Available Campuses</h2>
      <Link to={'/campus/add'}>
        <button type="button">Add Campus</button>
      </Link>
    <ul>
        {
          props.campuses && props.campuses.map(campus =>
            (
              <div key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <li>{campus.name}</li>
                  <img className="campus-image" src={campus.image} />
                </Link>
              </div>
            )
          )
        }
      </ul>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  };
};


export default connect(mapStateToProps)(AllCampuses);
