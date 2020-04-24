import {Usestorage,Removestorage} from '../utils/storage'
let dataCount = Usestorage().count || 0

export const counterReducer = (state = dataCount, action) =>{
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

export const counterReducer2 =(state = {} ,action) =>{
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