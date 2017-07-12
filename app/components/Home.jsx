import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import NewCampusEntry from './NewCampusEntry';
import NewStudentEntry from './NewStudentEntry';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Home extends Component {

  componentDidMount () {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
  }

  render () {
    return (
      <div>
        <NavLink
        to={`/campuses`}
        activeClassName="active"
        activeStyle={{ fontWeight: 'bold', color: 'green'}}>
          <span>Campuses</span>
        </NavLink>
        <NavLink
        to={`/students`}
        activeClassName="active"
        activeStyle={{ fontWeight: 'bold', color: 'green'}}>
          <span>Students</span>
        </NavLink>
        <main>
          <Switch>
            <Route exact path="/campuses" component={CampusList} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/new-campus" component={NewCampusEntry} />
            <Route path="/new-student" component={NewStudentEntry} />
            <Route exact path="/students" component={StudentList} />
            <Route path="/students/:studentId" component={SingleStudent} />
            <Redirect to="/campuses" />
          </Switch>
        </main>
      </div>
    );
  }
}
