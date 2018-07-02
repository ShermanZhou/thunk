import {combineReducers} from 'redux'


//reducer is (state, action)=>(state,action)

const countReducer = function (state = { count: 0 }, action) {
    switch (action.type){
        case INCREASE:
            return { ...state, count: count + 1 }
        case RESET:
            return { ...state, count: 0 }
        default:
            return state;
    }
}

const ajaxReducer = function (state, action) {
    switch (action.type) {
        case REQUEST_AJAX:
            return { ...state };
        case RECEIVE_AJAX:
            return { ...state };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    countReducer,
    ajaxReducer
});
export default rootReducer