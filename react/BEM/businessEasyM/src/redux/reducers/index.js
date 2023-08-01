import { combineReducers } from "redux";

import routesReducer from './routes'
import tabsReducer from './tabs'
import count from './count'
import routes from './rt'

export default combineReducers({
  extraRoutes: routesReducer,
  tabs: tabsReducer,
  count: count,
  routes
})