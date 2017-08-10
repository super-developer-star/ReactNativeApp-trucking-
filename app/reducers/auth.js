
import { AsyncStorage } from 'react-native';

/* Actions */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    GETUSER_SUCCESS,
    GETUSER_FAIL,
    SET_USER_TYPE,
    RESET_PASSWORD_SUCCESS,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAIL
} from './../contants/actionTypes';

const auth_reducer = (state = {}, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS")
            // store token in asyncstorage
            AsyncStorage.setItem('@Axle:token', action.data.token);
            return Object.assign(
                {},
                state,
                {
                    user: action.data.user
                }
            );
        case LOGIN_FAIL:
            // TODO: some alert may be
            return state;

        case SIGNUP_SUCCESS:
            console.log("SIGNUP_SUCCESS")
             // store token in asyncstorage
            AsyncStorage.setItem('@Axle:token', action.data.token);
            return Object.assign(
                {},
                state,
                {
                    isLoggedIn: true,
                    user: action.data.user,
                    token: action.data.token
                }
            );
        case SIGNUP_FAIL:
            // TODO: some alert may be
            return state;
        case GETUSER_SUCCESS:
            console.log('GETUSER_SUCCESS');
            return Object.assign(
                {},
                state,
                {
                    isLoggedIn: true,
                    user: action.data.user
                }
            );
        case GETUSER_FAIL:
            return state;
        case SET_USER_TYPE:
            return Object.assign(
                {},
                state,
                {
                    isOwner: action.data.isOwner
                }
            );
        case RESET_PASSWORD_SUCCESS:
            console.log("Reset", action.data)
            return Object.assign(
                {},
                state,
                {
                    isVerified: action.data
                }
            );
        case VERIFY_OTP_SUCCESS:
            console.log("OTP", action.data)
            return Object.assign(
                {},
                state,
                {
                    isOtp: action.data
                }
            );
        case VERIFY_OTP_FAIL:
            return state;
        default:
            return state;
    }
}

export default auth_reducer;