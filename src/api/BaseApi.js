export default class BaseApi {
    REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL : 'http://localhost:8000'
    CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
}