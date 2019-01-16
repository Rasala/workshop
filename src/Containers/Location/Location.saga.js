import {call, put, takeLatest} from 'redux-saga/effects';
import {setCurrentLocation} from './Location.actions';
import {LocationActions} from "./Location.constant";

const {
    GET_CURRENT_LOCATION,
} = LocationActions;

const getCurrentPosition = () => new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
    });
});

function* getCurrentLocation() {
    try {
        const location = yield call(getCurrentPosition());

        yield put(setCurrentLocation(location));
    } catch (error) {

    }
}

export function* watchLocationSaga() {
    yield takeLatest(GET_CURRENT_LOCATION, getCurrentLocation);
}