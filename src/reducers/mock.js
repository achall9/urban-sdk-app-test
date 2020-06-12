import ActionTypes from '../constants/actionTypes';

const initialState = {
    predictions: [],
    zone_counts: [],
    loading: false,
    error: {}
};

export default function users(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case ActionTypes.GET_CRASH_PREDICTION.REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_CRASH_PREDICTION.SUCCESS:
            return {
                ...state,
                predictions: payload.data,
                loading: false
            }
        case ActionTypes.GET_CRASH_PREDICTION.FAILURE:
            return {
                ...state,
                loading: false
            }
        case ActionTypes.GET_ZONE_COUNTS.REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_ZONE_COUNTS.SUCCESS:
            return {
                ...state,
                zone_counts: payload.data,
                loading: false
            }
        case ActionTypes.GET_ZONE_COUNTS.FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }

}