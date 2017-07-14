import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

  const mapStateToProps = function (state) {
    return {
      campuses: state.campuses,
      students: state.students
    };
  };

export function Sidebar (props) {
  return (
    <sidebar>
      <div className="sidebar-header">
        <h2 href="#">
          <div>Senior-Enrichment</div>
        </h2>
      </div>
        <NavLink to={'/students'}>
          <button
          type= 'button'
          className= "btn btn-primary">
            All Students
          </button>
        </NavLink>
        <NavLink to={'/campuses'}>
          <button
          type= 'button'
          className= "btn btn-primary">
            All Campuses
          </button>
        </NavLink>
      <h5>Campuses</h5>
      <ul>
        {
          props.campuses.map(campus => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`} activeClassName="active"
                activeStyle={{ fontWeight: 'bold', color: 'green'}}>
                  <span>{campus.name}</span>
                </NavLink>
              </li>
            );
          })
        }
      </ul>
      <NavLink
      to="/new-campus"
      activeClassName="active"
      activeStyle={{ fontWeight: 'bold', color: 'green'}}>
        <button
        type="button"
        className="btn btn-warning">
        Create a campus...
        </button>
      </NavLink>
      <NavLink
      to={'/new-student'}
      activeClassName="active"
      activeStyle={{ fontWeight: 'bold', color: 'green'}}>
        <button
        type="button"
        className="btn btn-warning">
        Create a student...
        </button>
      </NavLink>
    </sidebar>
  );
}

const sidebarContainer = connect(mapStateToProps)(Sidebar);
export default withRouter(sidebarContainer);

