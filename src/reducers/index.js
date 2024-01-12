
import {combineReducers} from 'redux'

// CounterReducer
import CounterReducer from "./CounterReducer";

// Root Reducer
const rootReducer=combineReducers({
    counter: CounterReducer,
});

export default rootReducer