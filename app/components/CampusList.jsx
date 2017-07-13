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
      <li>
        <NavLink
        to={'/students'}
        activeClassName="active"
        activeStyle={{ fontWeight: 'bold', color: 'green'}} >
          <span>All Students</span>
        </NavLink>
      </li>
      {
        props.campuses.map(campus => {
          return (
            <li key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`} activeClassName="active"
               activeStyle={{ fontWeight: 'bold', color: 'green'}}>
                <span>{campus.name}</span>
              </NavLink>
            </li>
          );
        })
      }
      <li>
        <NavLink
        to="/new-campus"
        activeClassName="active"
        activeStyle={{ fontWeight: 'bold', color: 'green'}}>Create a campus...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
const campusListContainer = connect(mapStateToProps)(CampusList);
export default withRouter(campusListContainer);
