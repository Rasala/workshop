import {WeatherActions} from "./Weather.constant";

const {
    GET_CURRENT_WEATHER,
    GET_CURRENT_WEATHER_FAILURE,
    GET_CURRENT_WEATHER_SUCCESS,
    GET_WEATHER_FORECAST,
    GET_WEATHER_FORECAST_FAILURE,
    GET_WEATHER_FORECAST_SUCCESS,
} = WeatherActions;

export const getCurrentWeather = (settings) => ({
    type: GET_CURRENT_WEATHER,
    settings
});

export const getCurrentWeatherFailure = (error) => ({
    type: GET_CURRENT_WEATHER_FAILURE,
    error
});

export const getCurrentWeatherSuccess = (weather) => ({
    type: GET_CURRENT_WEATHER_SUCCESS,
    weather
});

export const getWeatherForecast = (settings) => ({
    type: GET_WEATHER_FORECAST,
    settings
});
export const getWeatherForecastFailure = (error) => ({
    type: GET_WEATHER_FORECAST_FAILURE,
    error
});

export const getWeatherForecastSuccess = (forecast) => ({
    type: GET_WEATHER_FORECAST_SUCCESS,
    forecast
});