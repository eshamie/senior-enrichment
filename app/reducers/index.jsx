import { combineReducers } from 'redux'

//import sub-reducers
import campuses from './campuses';
import students from './students';

const rootReducer = combineReducers({
  campuses,
  students
});
// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default rootReducer;
