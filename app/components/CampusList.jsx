import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';
import { deleteCampus } from '../store';

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleDelete: function(event){
      event.preventDefault();
      dispatch(deleteCampus(Number(event.target.id)));
    }
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
              <NavLink to={`/campuses/${campus.id}/update`}>
                <button
                type= 'button'
                className= "btn btn-info">
                Update</button>
              </NavLink>
              <button
              id={campus.id}
              type="button"
              className="btn btn-danger"
              onClick={props.handleDelete}
              >Delete</button>
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
const campusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);
export default withRouter(campusListContainer);
