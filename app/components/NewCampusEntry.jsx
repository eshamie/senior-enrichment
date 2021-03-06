import React from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../store';

function mapStateToProps(state){
  return {
    newCampusEntry: state.newCampus
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    //create a campus with the inputed values
    handleSubmit: function(event){
      event.preventDefault();
      dispatch(postCampus({name: event.target.campusName.value, image: event.target.image.value}, ownProps.history));
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
        />
        <input
        className="form-control"
        type="text"
        name="image"
        placeholder="Enter image url"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Campus</button>
      </div>
    </form>
  );
}

const newCampusContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry);
export default newCampusContainer;
