'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCampus } from '../reducers/campusReducer';


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
                <button onClick={(event) =>
                {props.destroyCampus(campus.id);}}
                >X Delete {campus.name}</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    destroyCampus: (campusId) => {
      dispatch(removeCampus(campusId));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
