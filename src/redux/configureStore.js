//Redux store configuration

import { createStore,combineReducers ,applyMiddleware } from "redux";
import { Dishes } from './dishes';
import { Comments } from "./comments";
import { Promotions } from './promotions';
import { Leaders } from "./leaders";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    //createStore takes two parameters
    //combining reducers
    //introduce enhancer as a second parameter
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        //enhancer
        applyMiddleware(thunk, logger)
    );

    return store;
}