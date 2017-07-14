import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import NewCampusEntry from './NewCampusEntry';
import NewStudentEntry from './NewStudentEntry';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import UpdateStudentEntry from './UpdateStudentEntry';
import UpdateCampusEntry from './UpdateCampusEntry';
import SideBar from './SideBar';
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
        <SideBar />
        <main>
          <Switch>
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/new-campus" component={NewCampusEntry} />
            <Route path="/campuses/:campusId/update" component={UpdateCampusEntry} />
            <Route path="/campuses/:campusId/new-student" component={NewStudentEntry} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route path="/students/:studentId/update" component={UpdateStudentEntry} />
            <Route
            path='/new-student' component={NewStudentEntry} />
            <Redirect to="/students" />
          </Switch>
        </main>
      </div>
    );
  }
}
