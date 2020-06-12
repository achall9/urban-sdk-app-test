import MockApi from '../api/MockApi';
import ActionTypes from '../constants/actionTypes';

export function getCrashPredictions() {
    return dispatch => {
        dispatch(request());
        return MockApi
            .getCrashPredictions()
            .then(resp => {
                    return dispatch(success(resp.data))
                })
            .catch(error => dispatch(failure(error)));
    };
  
    function request() { return { type: ActionTypes.GET_CRASH_PREDICTION.REQUEST } }
    function success(techs) { return { type: ActionTypes.GET_CRASH_PREDICTION.SUCCESS, payload: techs } }
    function failure(error) { return { type: ActionTypes.GET_CRASH_PREDICTION.FAILURE, payload: error } }
}

export function getZoneCounts() {
    return dispatch => {
        dispatch(request());
        return MockApi
            .getZoneCounts()
            .then(resp => {
                    return dispatch(success(resp.data))
                })
            .catch(error => dispatch(failure(error)));
    };
  
    function request() { return { type: ActionTypes.GET_ZONE_COUNTS.REQUEST } }
    function success(techs) { return { type: ActionTypes.GET_ZONE_COUNTS.SUCCESS, payload: techs } }
    function failure(error) { return { type: ActionTypes.GET_ZONE_COUNTS.FAILURE, payload: error } }
}