import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import ScreenReducer from './Screen1Reducer';
import Screen2Reducer from "./Screen2Reducer";

const AppReducers = combineReducers({
    Red1: ScreenReducer,
    Red2: Screen2Reducer   
});
const rootReducer = (state, action) => {
    return AppReducers(state, action)
}
export default createStore(rootReducer, applyMiddleware(thunk));