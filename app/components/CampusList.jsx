import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,

  };
};


function CampusList(props) {
  return (
    <ul>
      {
        props.campuses.map(campus => {
          return (
            <li key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`} >
                <span>{campus.name}</span>
              </NavLink>
            </li>
          );
        })
      }
      <li>
        <NavLink to="/new-campus">Create a campus...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
const campusListContainer = connect(mapStateToProps)(CampusList);
export default withRouter(campusListContainer);
