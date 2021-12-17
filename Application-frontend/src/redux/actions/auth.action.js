import { loginService, logoutService, registerService } from '../../services'
import { userConstants } from "../constants";


export const loginAction = ({username, password}) => async(dispatch) => {
    
    dispatch({type: userConstants.LOGIN_REQUEST});

    loginService({username, password})
        .then(
            user => {
                dispatch({type: userConstants.LOGIN_SUCCESS, user})
            },
            error => 
                dispatch({type: userConstants.LOGIN_FAILURE, error})
        )
}

export const registerAction = user => async(dispatch) => {
    dispatch({type: userConstants.REGISTER_REQUEST});
    registerService(user)
        .then(
            response => {
                dispatch({type: userConstants.REGISTER_SUCCESS, response})
            },
            error => 
                dispatch({type: userConstants.REGISTER_FAILURE, error})
        )
}

export const logoutAction = () => async(dispatch) => {
    dispatch({type: userConstants.LOGOUT});
    logoutService()
}



