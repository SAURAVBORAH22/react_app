//Redux store configuration

import { createStore,combineReducers } from "redux";
import { Dishes } from './dishes';
import { Comments } from "./comments";
import { Promotions } from './promotions';
import { Leaders } from "./leaders";


export const ConfigureStore = () => {
    //createStore takes two parameters
    //combining reducers
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}