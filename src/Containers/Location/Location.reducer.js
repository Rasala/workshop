import {LocationActions} from "./Location.constant";

const {
    GET_CURRENT_LOCATION,

    SET_CURRENT_LOCATION,
} = LocationActions;

const initState = {
    currentLocation: null
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: null
            };
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.location
            };
        default:
            return state;
    }
};

export default reducer;