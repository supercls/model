import {applyMiddleware,createStore,combineReducers} from 'redux'   
import logger from 'redux-logger'
import thunk from 'redux-thunk';  //异步中间件
import {Usestorage,Removestorage} from '../utils/storage'

let dataCount = Usestorage().count || 0

const counterReducer = (state = dataCount, action) =>{
    switch (action.type){
        case 'add' :
            Usestorage({
                count:state+1
            })
            return state+1;
        case 'reduce' :
            Usestorage({
                count:state-1
            })
            return state-1;
        case 'remove' :
            Removestorage()
        default :
            return state
    }
}

const counterReducer2 =(state = {} ,action) =>{
    switch (action.type){
        case 'set' :
            return {
                ...state,
                ...action.value
            }
        default :
            return state    
    }
}

const store = createStore(
    combineReducers({ reducer1:counterReducer,reducer2:counterReducer2}),   //顺序有关
    applyMiddleware(logger,thunk)
    
)
export default store