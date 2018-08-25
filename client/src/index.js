import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk'

import App from './components/app'
import Welcome from './components/welcome'
import Signup from "./components/auth/signup";
import Signout from "./components/auth/signout";
import Signin from "./components/auth/signin";
import Feature from "./components/feature";
import reducers from './reducers'

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem('token')
    }
  },
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/feature" exact component={Feature}/>
        <Route path="/signout" exact component={Signout}/>
        <Route path="/signin" exact component={Signin}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)