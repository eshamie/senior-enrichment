import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};


function SingleCampus(props) {
  const campusId = Number(props.match.url.slice(-1));
  const students = props.students;
  console.log('my campuses', props.campuses)
  console.log('my students', props)
  const filteredStudents = students.filter(student => {
    return student.campusId === campusId;
  });
  return (
    <ul>
      {

        filteredStudents.map(student => {
          return (
            <li key={student.id}>
              <NavLink to={`/students/${student.id}`} >
                <span>{student.name}</span>
              </NavLink>
            </li>
          );
        })
      }
      <li>
        <NavLink to="/new-student">Create a student...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
const singleCampusContainer = connect(mapStateToProps)(SingleCampus);
export default withRouter(singleCampusContainer);
