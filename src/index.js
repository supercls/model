import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


const render = ()=>{
  ReactDOM.render(
    <Router>
      <App/>
    </Router>
    ,
    document.querySelector('#root')
  )
  }
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
