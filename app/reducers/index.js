import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE, DATA_NAVIGATION } from "../actions/" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true, dataNavigation:[] };
 
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.dataInstructions, loading:false });
            return state;
        case DATA_NAVIGATION:
            state = Object.assign({}, state, { dataNavigation: action.dataNavigation, loading:false });
            return state;
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;