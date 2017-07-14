import { combineReducers } from 'redux'

//import sub-reducers
import campuses from './campuses';
import students from './students';

const rootReducer = combineReducers({
  campuses,
  students,
});

export default rootReducer;
export * from './campuses';
export * from './students';
