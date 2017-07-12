import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

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
        const action = getStudent(newStudent);
        dispatch(action);
        history.push(`/students/${newStudent.id}`);
      });
  };
}

export default function studentsReducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
}
