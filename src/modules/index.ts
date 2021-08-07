import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const reducers = (history: any) =>
  combineReducers({
    router: connectRouter(history)
  })

const services = () => {}

export { reducers, services }
