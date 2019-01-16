import { all } from 'redux-saga/effects';
import {watchWeatherSaga} from "../Containers/Weather/Weather.saga";
import {fork} from "redux-saga/effects";
import {watchLocationSaga} from "../Containers/Location/Location.saga";

const sagas = [
    watchLocationSaga,
    watchWeatherSaga,
];

export default function* root() {
    const forks = sagas.map(saga => fork(saga));

    yield all([...forks]);
}