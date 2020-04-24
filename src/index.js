import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import { Provider } from 'react-redux'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import routes from '@/routers/index'
import RouterView from  '@/routers/routers'

const render = ()=>{
  ReactDOM.render(
    <Provider store={store}>
       <Router>
        <RouterView routes={routes}></RouterView>
      </Router>
    </Provider>,
    document.querySelector('#root')
  )
  }
render()
//store.subscribe(render)  //直接监听注册,不用connec

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
