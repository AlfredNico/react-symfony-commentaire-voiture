import { userConstants } from "../constants";

export const registrationReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { isLoading: true }

        case userConstants.REGISTER_SUCCESS:
            return { isLoading: false, response: action.response }

        case userConstants.REGISTER_FAILURE:
            return { isLoading: false, error: action.error }
    
        default:
            return state;
    }
}