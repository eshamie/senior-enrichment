import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeStudent, writeEmail, writeStudentCampus, postStudent } from '../store';

function mapStateToProps(state, ownProps){
  return {
    campuses: state.campuses,
    newStudent: state.newStudent
  };
}


function mapDispatchToProps(dispatch, ownProps){
  return {
    // handleNameChange: function(event){
    //   dispatch(writeStudent(event.target.value));
    // },
    // handleEmailChange: function(event){
    //   dispatch(writeEmail(event.target.value));
    // },
    handleCampusChange: function(event){
      dispatch(writeStudentCampus(event.target.value));
    },
    handleSubmit: function(event){
      console.log('ownProps',ownProps)
      event.preventDefault();
      dispatch(postStudent({name: event.target.studentName.value, email: event.target.email.value, campusId: event.target.campus.value}, ownProps.history));
    }
  };
}

function NewStudentEntry (props) {

  return (
    <form onSubmit= {props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Add a Student</label>
        <input
        className="form-control"
        type="text"
        name="studentName"
        placeholder="Enter student name"
        />
        <input
        className="form-control"
        type="text"
        name="email"
        placeholder="Enter email"
        />
        <input
        className="form-control"
        type="text"
        name="campus"
        placeholder="Enter campus name"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Add Student</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const newStudentContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry);
export default newStudentContainer;
