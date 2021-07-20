//es6 importing everything that is exported
import * as ActionTypes from './ActionTypes';

//Dishes Reducer
import { DISHES } from '../shared/dishes';

//for communicating with the server
import { baseUrl } from '../shared/baseUrl';

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

    return fetch(baseUrl + 'dishes')
        //promise handler
        //if response from the server was ok we are returning the response
        .then(response => {
            if (response.ok) {
                return response;
            }
            //if we encounter error
            //then we are taking the error code and joining it to a message to show error
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            //error handler
            error => {
                //error.message will contain information about what the error is about
                //with the help of it we are creating an error object 
                //and then throwing the error
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))

        //catching the error 
        .catch(error => dispatch(dishesFailed(error.message)));
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


//setting up fetch comments
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        //promise handler
        //if response from the server was ok we are returning the response
        .then(response => {
            if (response.ok) {
                return response;
            }
            //if we encounter error
            //then we are taking the error code and joining it to a message to show error
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            //error handler
            error => {
                //error.message will contain information about what the error is about
                //with the help of it we are creating an error object 
                //and then throwing the error
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))

        //catching the error 
        .catch(error => dispatch(commentsFailed(error.message)));
};


//comments failed
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});


//adding comments
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});



//setting up fetch promotions
export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        //promise handler
        //if response from the server was ok we are returning the response
        .then(response => {
            if (response.ok) {
                return response;
            }
            //if we encounter error
            //then we are taking the error code and joining it to a message to show error
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            //error handler
            error => {
                //error.message will contain information about what the error is about
                //with the help of it we are creating an error object 
                //and then throwing the error
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        //catching the error 
        .catch(error => dispatch(promosFailed(error.message)));
}

//promotions loading
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});


//promotions failed
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});


//adding promitions
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});