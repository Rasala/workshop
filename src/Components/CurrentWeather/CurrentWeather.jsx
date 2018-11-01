import React, {lazy, useEffect, Suspense} from 'react';
import {getCurrentWeather} from "../../Containers/Weather/Weather.action";
import {bindActionCreators} from "redux";
import useRedux from "../../Hooks/redux";
import Loader from "../Loader/Loader";

const Header = lazy(() => import("./Header"));
const Table = lazy(() => import("./Table"));

const mapStateToProps = store => ({
    current: store.weather.current,
    getCurrentError: store.weather.getCurrentError,
    getCurrentPending: store.weather.getCurrentPending,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getCurrentWeather
}, dispatch);

const CurrentWeather = () => {
    const {
        current,
        getCurrentError,
        getCurrentPending,
        getCurrentWeather
    } = useRedux(mapStateToProps, mapDispatchToProps);

    useEffect(() => {
        if (!current && !getCurrentError) {
            navigator.geolocation.getCurrentPosition((position) => {
                    getCurrentWeather({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
            });
        }
    }, [current, getCurrentError]);

    if (getCurrentPending) {
        return <Loader />;
    }

    return (
        <Suspense fallback={<Loader />}>
            <Header city={current.name} country={current.sys.country} weather={current.weather[0]}/>
            <Table />
        </Suspense>

    )
};

export default CurrentWeather;