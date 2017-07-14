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
    },
  };
}


function SingleCampus(props) {
  const campusId = Number(props.match.params.campusId);
  const students = props.students;
  const filteredStudents = students.filter(student => {
    return student.campusId === campusId;
  });
  return (
    <ul>
      {

        filteredStudents.map(student => {
          return (
            <li key={student.id}>
              <NavLink to={`/students/${student.id}`} >
                <span>{student.name}</span>
              </NavLink>
              <NavLink to={`/students/${student.id}/update`}>
                <button
                type= 'button'
                className= "btn btn-info">
                Update</button>
              </NavLink>
              <button
              id={student.id}
              type="button"
              className="btn btn-danger"
              onClick={props.handleDelete}
              >Delete
              </button>
            </li>
          );
        })
      }
       <li>
        <NavLink to={`/campuses/${campusId}/new-student`}>Create a student...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
const singleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default withRouter(singleCampusContainer);
