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


function SingleStudent(props) {
  const studentId = Number(props.match.url.slice(-1));
  const students = props.students;
  const foundStudent = students.find(student => {
    return student.id === studentId;
  });
  const campuses = props.campuses;
  const campusId = foundStudent.campusId;
  const foundCampus = campuses.find(campus => {
    return campus.id === campusId;
  });

  return (
    <div>
      {
        <ul>
          <li key={foundStudent.id}>
            <NavLink to={`/campuses/${foundCampus.id}`} >
              <span>{foundCampus.name}</span>
            </NavLink>
          </li>
          <li>
            {foundStudent.email}
          </li>
        </ul>
      }
    </div>
  );
}

/** Write your `connect` component below! **/
const singleStudentContainer = connect(mapStateToProps)(SingleStudent);
export default withRouter(singleStudentContainer);
