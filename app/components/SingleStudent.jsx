import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
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
      //use the history top redirect to my StudentsList view
      dispatch(deleteStudent(Number(event.target.id), ownProps.history));
    }
  };
}


function SingleStudent(props) {
  const studentId = Number(props.match.params.studentId);
  const students = props.students;
  const foundStudent = students.find(student => student.id === studentId);
  const campuses = props.campuses;
  const campusId = foundStudent ? foundStudent.campusId : '';
  const foundCampus = foundStudent ? campuses.find(campus => campus.id === campusId) : {};

  return (
    <div>
      <table className="table">
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
          <tr>
            <td>{foundStudent.name}</td>
            <td>
              {foundStudent.email}
            </td>
            <td>
              <NavLink to={`/campuses/${foundCampus.id}`} >
                <span>{foundCampus.name}</span>
              </NavLink>
            </td>
            <td>
            <NavLink to={`/students/${studentId}/update`}>
              <button
              type= 'button'
              className= "btn btn-info">
              Update</button>
            </NavLink>
            </td>
            <td>
              <button
              id={studentId}
              type="button"
              className="btn btn-danger"
              onClick={props.handleDelete}
              >Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const singleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
export default withRouter(singleStudentContainer);
