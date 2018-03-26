import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

// Redux form direct imports
import formReducer from 'redux-form/lib/reducer';

// Import reducers
import forms from './forms/reducer';
import global from './global/reducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  app: combineReducers({
    global,
    forms,
  }),
  form: formReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
