import { all } from 'redux-saga/effects';
import {watchWeatherSaga} from "../Containers/Weather/Weather.saga";
import {fork} from "redux-saga/effects";

const sagas = [
    watchWeatherSaga
];

export default function* root() {
    const forks = sagas.map(saga => fork(saga));

    yield all([...forks]);
}