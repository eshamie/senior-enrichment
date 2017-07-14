import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../store';

function mapStateToProps(state, ownProps){
  return {
    campuses: state.campuses,
    newStudent: state.newStudent
  };
}


function mapDispatchToProps(dispatch, ownProps){
  return {
    handleSubmit: function(event){
      event.preventDefault();
      console.log(event)
      dispatch(postStudent({name: event.target.studentName.value, email: event.target.email.value, campusId: Number(ownProps.match.params.campusId)}, ownProps.history));
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
