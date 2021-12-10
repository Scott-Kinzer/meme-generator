import {memeReducer} from "../reducers/memeReducer";
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

let rootReducer = combineReducers(
    {
        dataReducer: memeReducer
    })

const store = createStore( rootReducer, applyMiddleware(thunk))



export default store;
