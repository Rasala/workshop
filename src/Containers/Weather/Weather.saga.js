import * as Service from "./Weather.service";
import {call, put, takeLatest} from 'redux-saga/effects';
import {
    getCurrentWeatherFailure,
    getCurrentWeatherSuccess,
    getWeatherForecastFailure,
    getWeatherForecastSuccess
} from "./Weather.action";
import { WeatherActions } from "./Weather.constant";

const {
    GET_CURRENT_WEATHER,
    GET_WEATHER_FORECAST,
} = WeatherActions;

function* getCurrentWeather(action) {
    try {
        const weather = yield call(Service.getWeatherByLocation, action.settings);

        yield put(getCurrentWeatherSuccess(weather));
    } catch (error) {
        yield put(getCurrentWeatherFailure(error))
    }
}

function* getWeatherForecast(action) {
    try {
        const weather = yield call(Service.getForecastByLocation, action.settings);

        yield put(getWeatherForecastSuccess(weather));
    } catch (error) {
        yield put(getWeatherForecastFailure(error))
    }
}

export function* watchWeatherSaga() {
    yield takeLatest(GET_CURRENT_WEATHER, getCurrentWeather);
    yield takeLatest(GET_WEATHER_FORECAST, getWeatherForecast);
}