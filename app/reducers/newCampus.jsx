import axios from 'axios';

const WRITE_CAMPUS = 'WRITE_CAMPUS';


export function writeCampus (name) {
  const action = {
    type: WRITE_CAMPUS,
    name
  };
  return action;
}

export default function newCampusReducer (state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.name;
    default:
      return state;
  }

}
