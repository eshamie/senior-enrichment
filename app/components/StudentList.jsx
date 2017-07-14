import React, { Component } from 'react';
import { NavLink, withRouter  } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';
import { deleteStudent } from '../store';

const mapStateToProps = function (state) {
  return {
    students: state.students,
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


function StudentList(props) {
  return (
    <ul>
      {
        props.students.map(student => {
          return (
            <li key={student.id}>
              <NavLink to={`/students/${student.id}`} activeClassName="active">
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
              >Delete</button>
            </li>
          );
        })
      }
    <NavLink to={'/new-student'}>Create a student...</NavLink>
    </ul>
  );
}

/** Write your `connect` component below! **/
const studentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList);
export default withRouter(studentListContainer);
