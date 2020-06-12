import axios from 'axios';
import BaseApi from './BaseApi';

class MockApi extends BaseApi {

    getCrashPredictions() {
        return axios.get(this.CORS_PROXY + "https://cdn.urbansdk.com/predictions.json");
    }

    getZoneCounts() {
        return axios.get(this.CORS_PROXY + "https://cdn.urbansdk.com/zone_count.json");
    }
    
}

export default new MockApi();