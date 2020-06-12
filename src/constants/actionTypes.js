import { defineAction } from 'redux-define';

export default {
    GET_CRASH_PREDICTION : defineAction('GET_CRASH_PREDICTION', ['REQUEST', 'SUCCESS', 'FAILURE']),
    GET_ZONE_COUNTS : defineAction('GET_ZONE_COUNTS', ['REQUEST', 'SUCCESS', 'FAILURE']),
}