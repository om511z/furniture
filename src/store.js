import {  legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { shirtReducer } from './Reducer/ProductReducer';

const reducer = combineReducers({
  shirt:shirtReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;