
/* Actions */
import {
    GET_ALL_AVAILABLE_SHIPMENTS_REQUEST,
    GET_ALL_AVAILABLE_SHIPMENTS_SUCCESS,
    GET_ALL_AVAILABLE_SHIPMENTS_FAIL,
    SELECT_SHIPMENT,
    ACCEPT_SHIPMENT_SUCCESS,
    ACCEPT_SHIPMENT_FAIL,
    SET_SEARCH_QUERY
} from './../contants/actionTypes';

const shipment_reducer = (state = {}, action) => {
    switch(action.type){
        case GET_ALL_AVAILABLE_SHIPMENTS_SUCCESS:
            console.log("GET_ALL_AVAILABLE_SHIPMENTS_SUCCESS");
            return Object.assign(
                {},
                state,
                {
                    count: action.data.count,
                    Shipment: state.Shipment.concat(action.data.Shipment)
                }
            );
        case GET_ALL_AVAILABLE_SHIPMENTS_FAIL:
            console.log("GET_ALL_AVAILABLE_SHIPMENTS_FAIL");
            // TODO: some alert may be
            return state;
        case SELECT_SHIPMENT:
            console.log("SELECT_SHIPMENT");
            return Object.assign(
                {},
                state,
                {
                    selectedShipment: action.data.shipment
                }
            );
        case ACCEPT_SHIPMENT_SUCCESS:
            console.log("ACCEPT_SHIPMENT_SUCCESS: ", action.data);
            // Remove shipment from available shipment
            return Object.assign(
                {},
                state,
                {
                    Shipment: state.Shipment.filter(element => {
                        return element._id !== action.data[0]._id
                    })
                }
            );
            return state;
        case ACCEPT_SHIPMENT_FAIL:
            console.log("ACCEPT_SHIPMENT_FAIL: ");
            // TODO: some alert may be
            return state;
        case SET_SEARCH_QUERY:
            console.log("SET_SEARCH_QUERY: ", action.data);
            return Object.assign(
                {},
                state,
                {
                    searchQuery: action.data
                }
            );
        default:
            return state;
    }
}

export default shipment_reducer;