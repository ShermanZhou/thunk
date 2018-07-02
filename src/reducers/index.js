import {combineReducers} from 'redux'


//reducer is (state, action)=>(state,action)

const countReducer = function (state = { count: 0 }, action) {
    switch (action.type){
        case 'INCREASE':
            return { ...state, count: state.count + 1 }
        case 'RESET':
            return { ...state, count: 0 }
        default:
            return state;
    }
}
//in real case each type of ajax need their own actions.
const ajaxReducer = function (state = {requesting: true, data:null}, action) {
    switch (action.type) {
        case 'REQUEST_AJAX':
            return { ...state, requesting:true, url:action.url };
        case 'RECEIVE_AJAX':
            return { ...state, requesting:false, url:action.url, data:action.data};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    countReducer,
    ajaxReducer
});
export default rootReducer