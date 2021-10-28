import { ADD_REVIEW } from "../action-types/TestimonialActionTypes";
import { useDispatch } from "react-redux";

export const addReview = (dispatch, reviewForm) => {
    dispatch({type: ADD_REVIEW, payload:reviewForm})
}