import { userConstants } from "../constants";

const currentUser = JSON.parse(localStorage.getItem('user'));
const initialState = currentUser ? { loggedIn: true, currentUser } : {};

export const authReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                isLoading: true,
            }

        case userConstants.LOGIN_SUCCESS:
            return {
                isLoading: false,
                user: action.user
            }

        case userConstants.LOGIN_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }

        case userConstants.LOGOUT:
            return {}
    
        default:
            return state;
    }
}