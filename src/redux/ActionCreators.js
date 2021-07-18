//es6 importing everything that is exported
import * as ActionTypes from './ActionTypes';

//Dishes Reducer
import { DISHES } from '../shared/dishes';
import { actionTypes } from 'react-redux-form';

// arrow function which creates an action object
//accepts 4 parameters
//standarized way to define a action type
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    //payload contain whatever data need to be carries in the action object 
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//function which returns a thunk which when called tries to fetch the datails
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    //introduce delay using setTimeout
    //2000ms delay
    //after the delay we are dispatching the DISHES
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

//function dishesLoading which returns an action
//of type DISHES_LOADING
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

//function dishesFailed which takes error message as a paramter
//return action object of type dishes failed
//also payload as error message
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});


//function addDishes which takes dishes as a paramter
//return action object as type ADD_DISHES
//also payload as dishes
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});