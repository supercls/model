import {applyMiddleware,createStore,combineReducers} from 'redux'   
import logger from 'redux-logger'
import thunk from 'redux-thunk';  //异步中间件
import {counterReducer,counterReducer2} from './reducers'
const store = createStore(
    combineReducers({ reducer1:counterReducer,reducer2:counterReducer2}),   //顺序有关
    applyMiddleware(logger,thunk)
    
)
export default store