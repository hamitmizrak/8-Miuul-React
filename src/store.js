
import{createStore} from 'redux'

// Root
import rootReducer from "./reducers";

// STORE
const store= createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// EXPORT
export default store;