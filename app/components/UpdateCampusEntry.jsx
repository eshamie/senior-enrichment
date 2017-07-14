import React from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../store';

function mapStateToProps(state){
  return {
    campuses: state.campuses,
  };
}


function mapDispatchToProps(dispatch, ownProps){

  return {
    handleUpdate: function(event){
      event.preventDefault();
      dispatch(updateCampus({ id: Number(ownProps.match.params.campusId), name: event.target.campusName.value, image: event.target.image.value }, ownProps.history));
    }
  };
}

function UpdateCampusEntry (props) {
  const campusId = Number(props.match.params.campusId);
  const campuses = props.campuses;
  const currentCampus = campuses.length ? campuses.find(campus => campus.id === campusId) : {};
  return (
    <form onSubmit= {props.handleUpdate}>
      <div className="form-group">
        <label htmlFor="name">Add a Campus</label>
        <input
        defaultValue={currentCampus.name}
        name="campusName"
        className="form-control"
        type="text"
        />
        <input
        defaultValue={currentCampus.image}
        name="image"
        className="form-control"
        type="text"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">Update Campus</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const updateCampusContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateCampusEntry);
export default updateCampusContainer;
