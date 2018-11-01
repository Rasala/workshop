import { WeatherActions } from "./Weather.constant";

const {
    GET_CURRENT_WEATHER,
    GET_CURRENT_WEATHER_FAILURE,
    GET_CURRENT_WEATHER_SUCCESS,

    GET_WEATHER_FORECAST,
    GET_WEATHER_FORECAST_FAILURE,
    GET_WEATHER_FORECAST_SUCCESS,
} = WeatherActions;

const initState = {
    current: null,
    getCurrentPending: true,
    getCurrentError: null,

    forecast: null,
    getForecastPending: true,
    getForecastError: null,
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                current: null,
                getCurrentPending: true,
                getCurrentError: null,
            };
        case GET_CURRENT_WEATHER_FAILURE:
            return {
                ...state,
                current: null,
                getCurrentError: action.error,
                getCurrentPending: false,
            };
        case GET_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                current: action.weather,
                getCurrentPending: false,
                getCurrentError: null,
            };
        case GET_WEATHER_FORECAST:
            return {
                ...state,
                forecast: null,
                getForecastError: null,
                getForecastPending: true,
            };
        case GET_WEATHER_FORECAST_FAILURE:
            return {
                ...state,
                forecast: null,
                getForecastError: action.error,
                getForecastPending: false,
            };
        case GET_WEATHER_FORECAST_SUCCESS:
            return {
                ...state,
                forecast: action.forecast,
                getForecastPending: false,
                getForecastError: null,
            };
        default:
            return state;
    }
};

export default reducer;