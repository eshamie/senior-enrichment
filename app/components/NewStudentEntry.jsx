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
    handleSubmit: function(props, event){
      event.preventDefault();
      const campusId = props.campuses.find(campus => campus.name === event.target.campus.value).id;
      dispatch(postStudent({name: event.target.studentName.value, email: event.target.email.value, campusId: campusId}, ownProps.history));
    }
  };
}

function NewStudentEntry (props) {
  const campusId = Number(props.match.params.campusId)
  const campuses = props.campuses;
  const currentCampus = campusId ? campuses.find(campus => campus.id === campusId) : {};

  return (
    <form onSubmit= {event => props.handleSubmit(props, event)}>
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
        defaultValue={currentCampus.name}
        className="form-control"
        name="campus"
        type="text"
        placeholder="Enter campus"
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
