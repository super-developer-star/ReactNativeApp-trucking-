import { combineReducers } from 'redux';
import auth from './auth';
import shipments from './shipments';
import { LoginReducer } from '../routes';

export default combineReducers({
    auth,
    shipments,
    LoginReducer
});
