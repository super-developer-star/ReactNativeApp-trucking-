import { HTTP } from '../../utils/HTTP';
import { GET_TRUCK_TYPE } from './constants';

export function getAllTruckTypes() {
  return function(dispatch) {
    HTTP('get', '/getAllTruckType')
      .then((response) => {
        console.log(response);
        dispatch({
            type: GET_TRUCK_TYPE,
            payload: response.data.data.data
        });
      })
  }
}
