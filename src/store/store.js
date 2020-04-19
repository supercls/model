import {applyMiddleware,createStore,combineReducers} from 'redux'   
import logger from 'redux-logger'
import thunk from 'redux-thunk';  //异步中间件


const counterReducer = (state = 0 , action) =>{
    switch (action.type){
        case 'add' :
            return state+1;
        case 'reduce' :
            return state-1;

        default :
            return state
    }
}

const counterReducer2 = (state = {} , action) =>{
    switch (action.type){
        case 'adds' :
            return {
                ...state,
                name:action.value
            }
        case 'reduces' :
            return {};

        default :
            return state
    }
}
const store = createStore(
    combineReducers({ counter:counterReducer,gets:counterReducer2}),   //顺序有关
    applyMiddleware(logger,thunk)
    
)
export default store