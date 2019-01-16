import { combineReducers } from 'redux';
import location from '../Containers/Location/Location.reducer';
import weather from '../Containers/Weather/Weather.reducer';

export const reducers = combineReducers({
    location,
    weather,
});