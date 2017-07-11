import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeStudent, postStudent } from '../store';

function mapStateToProps(state, ownProps){
  return {
    newStudentEntry: state.newStudentEntry

  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleChange: function(event){
      dispatch(Student(event.target.value));
    },
    handleSubmit: function(event){
      event.preventDefault();
      console.log('event', event.target);
      dispatch(postStudent({name: event.target.studentName.value}, ownProps.history));
      dispatch(writeStudent(''));
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
        placeholder="Enter campus name"
        value={props.newStudentEntry}
        onChange={props.handleChange}
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
