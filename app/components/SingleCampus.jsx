import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent, deleteCampus } from '../store';

const mapStateToProps = function (state) {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};

function mapDispatchToProps(dispatch){
  return {
     //deletes student within campus using id attached to the specific button
    handleDelete: function(event){
      event.preventDefault();
      //do not need to pass a history variable bc want to stay on this campus page
      dispatch(deleteStudent(Number(event.target.id)));
    },
    handleCampusDelete: function(event){
      event.preventDefault();
      dispatch(deleteCampus(Number(event.target.id)));
    }
  };
}


function SingleCampus(props) {
  const campusId = Number(props.match.params.campusId);
  const students = props.students;
  const filteredStudents = students.filter(student => {
    return student.campusId === campusId;
  });
  const campuses = props.campuses;
  const foundCampus = filteredStudents ? campuses.find(campus => campus.id) === campusId : {};
  return (
    <div>
      <img src={foundCampus.image} className="img-responsive" />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          filteredStudents.map(student => {
            return (
              <tr key={student.id}>
                <td >
                  <NavLink to={`/students/${student.id}`} >
                    <span>{student.name}</span>
                  </NavLink>
                </td>
                <td>{student.email}</td>

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
                  >Delete
                  </button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
        <NavLink to={`/campuses/${campusId}/new-student`}>
          <button
          type="button"
          className="btn btn-warning">
          Create Student In Campus
          </button>
        </NavLink>
         <NavLink to={`/campuses/${campusId}/update`}>
          <button
          type="button"
          className="btn btn-info">
          Update Campus
          </button>
        </NavLink>
        <button
          id={foundCampus.id}
          type="button"
          className="btn btn-danger"
          onClick={props.handleCampusDelete}
          >Delete Campus
        </button>
    </div>
  );
}

const singleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
export default withRouter(singleCampusContainer);
