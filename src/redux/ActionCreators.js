//es6 importing everything that is exported
import * as ActionTypes from './ActionTypes';



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