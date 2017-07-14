import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';
import { deleteStudent } from '../store';

const mapStateToProps = function (state) {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleDelete: function(event){
      event.preventDefault();
      dispatch(deleteStudent(Number(event.target.id)));
    }
  };
}


function SingleStudent(props) {
  const studentId = Number(props.match.params.studentId);
  const students = props.students;
  const foundStudent = students.length ? students.find(student => student.id === studentId) : {};

  const campuses = props.campuses;
  const campusId = foundStudent.campusId;
  const foundCampus = campuses.length ? campuses.find(campus => campus.id === campusId) : {};

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
const singleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
export default withRouter(singleStudentContainer);
