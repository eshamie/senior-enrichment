import axios from 'axios';

const WRITE_STUDENT_CAMPUS = 'WRITE_STUDENT_CAMPUS';

export function writeStudentCampus (campus) {
  const action = {
    type: WRITE_STUDENT_CAMPUS,
    campus
  };
  return action;
}

export default function newStudentReducer (state = '', action) {
  switch (action.type) {
    case WRITE_STUDENT_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
