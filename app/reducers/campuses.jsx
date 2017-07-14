import axios from 'axios';

/*---------- ACTIONS ----------*/

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

/*---------- ACTION CREATORS ----------*/

export function getCampus(campus) {
  const action = {
    type: GET_CAMPUS,
    campus
  };
  return action;
}

export function getCampuses(campuses) {
  const action = {
    type: GET_CAMPUSES,
    campuses
  };
  return action;
}

export function removeCampus(id){
  const action = {
    type: DELETE_CAMPUS,
    id
  };
  return action;
}

export function changeCampus(campus){
  const action = {
    type: UPDATE_CAMPUS,
    campus
  };
  return action;
}

/*---------- THUNK CREATORS ----------*/

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postCampus(campus, history) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        history.push(`/campuses/${newCampus.id}`);
        const action = getCampus(newCampus);
        dispatch(action);
      });
  };
}

export function deleteCampus(id, history){
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${id}`)
      .then(() => dispatch(removeCampus(id)));
  };
}

export function updateCampus(campus, history){
  return function thunk(dispatch){
    axios.put(`/api/campuses/${campus.id}`)
      .then(()=> {
        history.push(`/campuses/${campus.id}`);
        dispatch(changeCampus(campus));
      });
  };
}


/*---------- REDUCERS ----------*/

export default function campusesReducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.id);
    case UPDATE_CAMPUS:
      return state.map(campus => {
        return campus.id === action.campus.id ? action.campus : campus;
      });
    default:
      return state;
  }
}
