import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './authReducer';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import mainPageReducer from './mainPageReducer';

const rootReducer = combineReducers({
  user: authReducer,
  mainPage: mainPageReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))