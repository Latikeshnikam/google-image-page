import {
    FETCH_IMAGE_LIST_SUCCESS,
    FETCH_IMAGE_LIST_FAILURE,
    FETCH_IMAGE_DETAILS_SUCCESS,
    FETCH_IMAGE_DETAILS_FAILURE,
} from "../constants";

export default function imageReducer(state = {
    imageList:[],
    imageDetails: {},
    imageErr: null,
}, action) {
    switch (action.type) {
        case FETCH_IMAGE_LIST_SUCCESS:
            return {
                ...state,
                imageList:action.payload
            }
            break;
        case FETCH_IMAGE_LIST_FAILURE:
            return {
                ...state,
                imageErr:action.payload
            }
            break;
        case FETCH_IMAGE_DETAILS_SUCCESS:
            return {
                ...state,
                imageDetails:action.payload
            }
            break;
        case FETCH_IMAGE_DETAILS_FAILURE:
            return {
                ...state,
                imageErr:action.payload
            }
            break;
        default:
            break;
    }

    return state
}
