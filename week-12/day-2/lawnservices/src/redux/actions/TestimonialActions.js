import { ADD_REVIEW } from "../action-types/TestimonialActionTypes";


export const addReview = (dispatch, reviewForm) => {
    dispatch({type: ADD_REVIEW, payload:reviewForm})
}