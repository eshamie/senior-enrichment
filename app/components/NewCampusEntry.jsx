import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeCampus, postCampus } from '../store';

function mapStateToProps(state, ownProps){
  return {
    newCampusEntry: state.newCampusEntry

  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleChange: function(event){
      dispatch(writeCampus(event.target.value));
    },
    handleSubmit: function(event){
      console.log(event.target)
      event.preventDefault();
      dispatch(postCampus({name: event.target.campusName.value}, ownProps.history));
      dispatch(writeCampus(''));
    }
  };
}

function NewCampusEntry (props) {
  return (
    <form onSubmit= {props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Campus</label>
        <input
        className="form-control"
        type="text"
        name="campusName"
        placeholder="Enter campus name"
        value={props.newCampusEntry}
        onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Campus</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const newCampusContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry);
export default newCampusContainer;
