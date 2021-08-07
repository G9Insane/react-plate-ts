import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { createHashHistory } from 'history'
import { reducers } from '@/modules'
import Router from '@/router'
import '@/assets/index.css'

const history = createHashHistory()
const routeMiddleware = routerMiddleware(history)
const middleware = [routeMiddleware]

const store = createStore(reducers(history), compose(applyMiddleware(...middleware)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

export { store, history }
