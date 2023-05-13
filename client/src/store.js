import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './redux/user/userReducer';
import locationReducer from './redux/location/locationReducer';
import attendanceReducer from "./redux/attendance/attendanceReducer"



const rootReducer = combineReducers({
    userState: userReducer,
    locationState: locationReducer,
    attendanceState: attendanceReducer,
})

// const store = createStore(userReducer, applyMiddleware(thunk));

const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware)
    ))

export default store;