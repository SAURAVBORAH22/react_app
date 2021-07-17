//Redux store configuration

import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";


export const ConfigureStore = () => {
    //createStore takes two parameters
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}