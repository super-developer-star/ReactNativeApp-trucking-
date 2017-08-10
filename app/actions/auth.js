import {HTTP} from './../utils/HTTP';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    GETUSER_SUCCESS,
    GETUSER_FAIL,
    SET_USER_TYPE,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAIL
} from './../contants/actionTypes';

// example action
export function loginRequest(data) {
    return function (dispatch) {
        return new Promise(function(resolve, reject){{
            HTTP('post', '/login', data)
                .then(function (response) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        data: response.data.data
                    });
                    resolve(true);
                })
                .catch(error => {
                      console.log("ERROR", error)
                    dispatch({
                        type: LOGIN_FAIL,
                        error: error
                    });
                    reject(false);
                })
        }})
    }
}

export function signUpRequest(data) {
    return function (dispatch) {
        return new Promise(function(resolve, reject){{
            HTTP('post', '/driver/register_from_email', data)
                .then(function (response) {
                    console.log(response.data)
                    dispatch({
                        type: SIGNUP_SUCCESS,
                        data: response.data.data
                    });
                     console.log("ADGGGGGGGG",response.data)
                    resolve(true);
                })
                .catch(error => {
                    console.log("ERROR", error)
                    dispatch({
                        type: SIGNUP_FAIL,
                        error: error
                    });
                    reject(false);
                })
        }})
    }
}

export function getUserDetails(token){
    return function (dispatch) {
        return new Promise(function(resolve, reject){{
            HTTP('get', '/getUser', null, {authorization: "Bearer "+token})
                .then(function (response) {
                    dispatch({
                        type: GETUSER_SUCCESS,
                        data: response.data.data
                    });
                    resolve(true);
                })
                .catch(error => {
                    dispatch({
                        type: GETUSER_FAIL,
                        error: error
                    });
                    reject(false);
                })
        }})
    }
}

export function setUserType(isOwner){
    return function (dispatch) {
        dispatch({
            type: SET_USER_TYPE,
            data: {
                isOwner
            }
        });
    }
}

export function getResetPasswordToken(query) {
     console.log("prefix", query.num)
    return function (dispatch) {
        return new Promise(function(resolve, reject){{
            HTTP('get', `/getResetPasswordToken?country_code=${query.prefix}&mobile=${query.num}`)
                .then(function (response) {
                    console.log("aaaa", response)
                    dispatch({
                        type: RESET_PASSWORD_SUCCESS,
                        data: response.data.message
                    });
                    resolve(true);
                })
                .catch(error => {
                      console.log("ERROR", error)
                    dispatch({
                        type: RESET_PASSWORD_FAIL,
                        error: error
                    });
                    reject(false);
                })
        }})
    }
}

export function otpRequest(token, data){
    return function (dispatch) {
        return new Promise(function(resolve, reject){{
            HTTP('put', '/verifyOTP', data, {authorization: "Bearer "+token})
                .then(function (response) {
                    dispatch({
                        type: VERIFY_OTP_SUCCESS,
                        data: response.data.message
                    });
                    resolve(true);
                })
                .catch(error => {
                    dispatch({
                        type: VERIFY_OTP_FAIL,
                        error: error
                    });
                    reject(false);
                })
        }})
    }
}