//Comments reducer
import { COMMENTS } from '../shared/comments';
//es6 importing everything that is exported
import * as ActionTypes from './ActionTypes';

//at this moment the comments are not stored permanently 
//they are only stored in RAM
//as soon as the application restarts they get erased
export const Comments = (state = COMMENTS, action) => {
    //switch statement for deciding different action types
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;//because comment is a js array .. length of array tells the no of comments
            comment.date = new Date().toISOString();//converting date to string
            return state.concat(comment);//pushes the new element into the array // concat is a immutable object
        default:
            return state;//return state unmodified
    }
}