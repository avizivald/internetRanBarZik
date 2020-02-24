import { createStore, combineReducers } from 'redux';
import shiduchReducer from './Reducer'



const rootReducer = combineReducers({
    shiduchim: shiduchReducer
})

const dashboardStore = createStore(rootReducer)
export default dashboardStore