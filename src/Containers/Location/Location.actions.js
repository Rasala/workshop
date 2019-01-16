import {LocationActions} from "./Location.constant";

const {
    GET_CURRENT_LOCATION,

    SET_CURRENT_LOCATION,
} = LocationActions;

export const getCurrentLocation = () => ({
    type: GET_CURRENT_LOCATION,
});

export const setCurrentLocation = (location) => ({
    type: SET_CURRENT_LOCATION,
    location
});