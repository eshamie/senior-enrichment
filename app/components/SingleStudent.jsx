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
  console.log('student id ', studentId)
  const students = props.students;
  const filteredStudent = students.filter(student => {
    return student.id === studentId;
  });
  console.log('filtered student',filteredStudent)
  const campuses = props.campuses;
  console.log('campus', campuses)
  const campusId = filteredStudent.campusId;
  const filteredCampus = campuses.filter(campus => {
    return campus.id === campusId
  });
  console.log('filterd camps', filteredCampus)

  return (
    <div>
      {console.log('another filtered student', filteredStudent)}
      {
        <ul>
        <li key={filteredStudent.id}>
          <NavLink to={`/campuses/${filteredStudent.campusId}`} >
            <span>{filteredCampus.name}</span>
          </NavLink>
        </li>
        <li>{filteredStudent.email}</li>
        </ul>
      }
    </div>
  );
}

/** Write your `connect` component below! **/
const singleStudentContainer = connect(mapStateToProps)(SingleStudent);
export default withRouter(singleStudentContainer);
