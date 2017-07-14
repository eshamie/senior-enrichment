import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCampus } from '../store';

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = function(dispatch){
  return {
    //deletes campus using id attached to the specific button
    handleDelete: function(event){
      event.preventDefault();
      dispatch(deleteCampus(Number(event.target.id)));
    }
  };
};


function CampusList(props) {
  return (
    <div className="container">
      <div className="row">
      {
        props.campuses.map(campus => {
          return (
              <div className="col-md-5" key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`} activeClassName="active"
                activeStyle={{ fontWeight: 'bold', color: 'green'}}>
                  <span>{campus.name}</span>
                  <img src={campus.image} className="img-responsive" />
                </NavLink>
                <NavLink to={`/campuses/${campus.id}/update`}>
                <button
                type= 'button'
                className= "btn btn-info">
                Update</button>
                </NavLink>
                <button
                id={campus.id}
                type="button"
                className="btn btn-danger"
                onClick={props.handleDelete}
                >Delete</button>
              </div>
          );
        })
      }
      </div>
    </div>
  );
}

const campusListContainer = connect(mapStateToProps, mapDispatchToProps)(CampusList);
export default withRouter(campusListContainer);
