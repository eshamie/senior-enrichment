import React, { Component } from 'react';
import { NavLink, withRouter  } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
    students: state.students,
  };
};


function StudentList(props) {
  return (
    <ul>
      {
        props.students.map(student => {
          return (
            <li key={student.id}>
              <NavLink to={`/students/${student.id}`} activeClassName="active">
                <span>{student.name}</span>
              </NavLink>
            </li>
          );
        })
      }
    </ul>
  );
}

/** Write your `connect` component below! **/
const studentListContainer = connect(mapStateToProps)(StudentList);
export default withRouter(studentListContainer);
