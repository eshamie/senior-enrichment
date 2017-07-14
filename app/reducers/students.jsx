import axios from 'axios';


/*--------- ACTIONS --------*/

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

/*--------- ACTION CREATORS --------*/

export function getStudent(student) {
  const action = {
    type: GET_STUDENT,
    student
  };
  return action;
}

export function getStudents(students) {
  const action = {
    type: GET_STUDENTS,
    students
  };
  return action;
}

export function removeStudent(id) {
  const action = {
    type: REMOVE_STUDENT,
    id
  };
  return action;
}

export function update(student){
  const action = {
    type: UPDATE_STUDENT,
    student
  };
  return action;
}

/*--------- THUNK CREATORS --------*/

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function postStudent(student, history) {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        console.log('newstudent',newStudent)
        dispatch(getStudent(newStudent));
        history.push(`/students/${newStudent.id}`);
      });
  };
}

export function deleteStudent(id) {
  return function thunk(dispatch) {
    axios.delete(`/api/students/${id}`)
      .then(() => dispatch(removeStudent(id)));
  };
}

export function updateStudent(student, id, history){
  return function thunk(dispatch){
    axios.put(`/api/students/${id}`, student)
      .then(() => {
        history.push(`/campuses/${student.campusId}`);
        dispatch(update(Object.assign(student, {id: Number(id)})));
      });
  };
}

/*--------- REDUCERS--------*/

export default function studentsReducer (state = [], action) {
  console.log('im in here')
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      console.log('action.student', action.student)
      return [...state, action.student];
    case REMOVE_STUDENT:
      return state.filter(student => student.id !== action.id);
    case UPDATE_STUDENT:
      return state.map(student => {
        return student.id === action.student.id ? action.student : student;
      });
    default:
      return state;
  }
}
