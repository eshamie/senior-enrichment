import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudentß } from '../store';

function mapStateToProps(state, ownProps){
  return {
    campuses: state.campuses,
    students: state.students
  };
}


function mapDispatchToProps(dispatch, ownProps){

  return {
    handleUpdate: function(props, event){
      event.preventDefault();
      const campusId = props.campuses.find(campus => campus.name === event.target.campus.value).id;
      dispatch(updateStudent({ name: event.target.studentName.value, email: event.target.email.value, campusId}, ownProps.match.params.studentId, ownProps.history));
    }
  };
}

function UpdateStudentEntry (props) {
  const studentId = Number(props.match.params.studentId);
  const students = props.students;
  const currentStudent = students.length ? students.find(student => student.id === studentId) : {};
  console.log('currentstudent', currentStudent)
  const campuses = props.campuses;
  const currentCampus = campuses.length ? campuses.find(campus => campus.id === currentStudent.campusId) : {};
  return (
    <form onSubmit= {event => props.handleUpdate(props, event)}>
      <div className="form-group">
        <label htmlFor="name">Add a Student</label>
        <input
        defaultValue={currentStudent.name}
        name="studentName"
        className="form-control"
        type="text"
        />
        <input
        defaultValue={currentStudent.email}
        name="email"
        className="form-control"
        type="text"
        />
        <input
        defaultValue={currentCampus.name}
        name="campus"
        className="form-control"
        type="text"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">Update Student</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const updateStudentContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateStudentEntry);
export default updateStudentContainer;
