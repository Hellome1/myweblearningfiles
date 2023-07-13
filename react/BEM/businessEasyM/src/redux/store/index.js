import { legacy_createStore as createStore, combineReducers } from 'redux'

import routesReducer from '../reducers/routes'
import tabsReducer from '../reducers/tabs'

const reducer = combineReducers({
  extraRoutes: routesReducer,
  tabs: tabsReducer
})

export default createStore(reducer)