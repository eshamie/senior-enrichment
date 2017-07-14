import React from 'react';
import { NavLink, withRouter  } from 'react-router-dom';
// import store from '../store';
import { connect } from 'react-redux';
import { deleteStudent } from '../store';

const mapStateToProps = function (state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

function mapDispatchToProps(dispatch){
  return {
    handleDelete: function(event){
      event.preventDefault();
      //do not need to pass a history variable bc want to stay on the StudentList view
      dispatch(deleteStudent(Number(event.target.id)));
    }
  };
}


function StudentList(props) {
  return (
    <div>
      <table className="table" >
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Campus</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          props.students.map(student => {
            const campuses = props.campuses;
            const campus = campuses.find(item => item.id === student.campusId);
            return (
              <tr key={student.id}>
                <td>
                <NavLink to={`/students/${student.id}`} activeClassName="active">
                  <span>{student.name}</span>
                </NavLink>
                </td>
                <td>{student.email}</td>
                <td>{
                  campus && campus.name
                }</td>
                <td>
                <NavLink to={`/students/${student.id}/update`}>
                  <button
                  type= 'button'
                  className= "btn btn-info">
                  Update</button>
                </NavLink>
                </td>
                <td>
                <button
                id={student.id}
                type="button"
                className="btn btn-danger"
                onClick={props.handleDelete}
                >Delete</button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}

const studentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList);
export default withRouter(studentListContainer);
