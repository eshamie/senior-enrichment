import { combineReducers } from 'redux'

//import sub-reducers
import campuses from './campuses';
import students from './students';
import newCampus from './newCampus';
import newStudent from './newStudent';

const rootReducer = combineReducers({
  campuses,
  students,
  newCampus,
  newStudent
});
// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default rootReducer;
export * from './campuses';
export * from './students';
export * from './newCampus';
export * from './newStudent';
