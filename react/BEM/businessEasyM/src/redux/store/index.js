import { legacy_createStore as createStore, combineReducers } from 'redux'
import reducer from '../reducers/index';

export default createStore(reducer)