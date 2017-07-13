import axios from 'axios';

const WRITE_STUDENT = 'WRITE_STUDENT';
const WRITE_EMAIL = 'WRITE_EMAIL';
const WRITE_STUDENT_CAMPUS = 'WRITE_STUDENT_CAMPUS';


export function writeStudent (name) {
  const action = {
    type: WRITE_STUDENT,
    name
  };
  return action;
}

export function writeEmail (email) {
  const action = {
    type: WRITE_EMAIL,
    email
  };
  return action;
}

export function writeStudentCampus (campus) {
  const action = {
    type: WRITE_STUDENT_CAMPUS,
    campus
  };
  return action;
}

export default function newStudentReducer (state = {}, action) {
  const newObject = Object.assign({}, state);
  switch (action.type) {
    case WRITE_STUDENT:
      newObject.name = action.name;
      break;
    case WRITE_EMAIL:
      newObject.email = action.email;
      break;
    case WRITE_STUDENT_CAMPUS:
      newObject.campus = action.campus;
      break;
    default:
      return state;
  }
  return newObject;
}
