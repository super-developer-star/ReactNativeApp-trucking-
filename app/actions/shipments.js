import {HTTP} from './../utils/HTTP';
import { AsyncStorage } from 'react-native';

import {
    GET_ALL_AVAILABLE_SHIPMENTS_REQUEST,
    GET_ALL_AVAILABLE_SHIPMENTS_SUCCESS,
    GET_ALL_AVAILABLE_SHIPMENTS_FAIL,
    SELECT_SHIPMENT,
    ACCEPT_SHIPMENT_REQUEST,
    ACCEPT_SHIPMENT_SUCCESS,
    ACCEPT_SHIPMENT_FAIL,
    SET_SEARCH_QUERY
} from './../contants/actionTypes';

// example action
export function getAllAvailableShipmentRequest(query) {
    return function (dispatch) {
        return new Promise(function(resolve, reject){{
            AsyncStorage.getItem('@Axle:token')
                .then(function(token){
                    HTTP('get', '/driver/getAllAvailabeShipment', {}, {authorization: "Bearer "+token}, query)
                        .then(function (response) {
                            dispatch({
                                type: GET_ALL_AVAILABLE_SHIPMENTS_SUCCESS,
                                data: response.data.data
                            });
                            resolve(true);
                        })
                        .catch(error => {
                            dispatch({
                                type: GET_ALL_AVAILABLE_SHIPMENTS_FAIL,
                                error: error
                            });
                            reject(false);
                        })
                })
        }})
    }
}

export function selectShipment(shipment){
    return function (dispatch) {
        dispatch({
            type: SELECT_SHIPMENT,
            data: {
                shipment
            }
        });
    }
}

export function acceptShipment(shipmentId) {
    return function (dispatch) {
        return new Promise(function(resolve, reject){{
            AsyncStorage.getItem('@Axle:token')
                .then(function(token){
                    HTTP('put', '/driver/acceptShipment', {shipmentId}, {authorization: "Bearer "+token})
                        .then(function (response) {
                            dispatch({
                                type: ACCEPT_SHIPMENT_SUCCESS,
                                data: response.data.data
                            });
                            resolve(true);
                        })
                        .catch(error => {
                            dispatch({
                                type: ACCEPT_SHIPMENT_FAIL,
                                error: error
                            });
                            reject(false);
                        })
                })
        }})
    }
}

export function setShipmentSearchQuery(cityState = null, deliveryStateCity = null, dateFrom = null, truckType = null){
    return function (dispatch) {
        let query = {};
        if(pickupLocation !== null){
            query.cityState = cityState;
        }
        if(dropOffLocation !== null){
            query.deliveryStateCity = deliveryStateCity;
        }
        if(pickupDate !== null){
            query.dateFrom = dateFrom;
        }
        if(trailer !== null){
            query.truckType = truckType;
        }
        dispatch({
            type: SET_SEARCH_QUERY,
            data: query
        });
    }
}