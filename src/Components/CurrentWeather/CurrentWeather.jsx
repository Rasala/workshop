import React, {lazy, useEffect, Suspense} from 'react';
import {getCurrentWeather} from "../../Containers/Weather/Weather.action";
import {bindActionCreators} from "redux";
import useRedux from "../../Hooks/redux";
import Loader from "../Loader/Loader";
import usePosition from "../../Hooks/position.hook";

const Basic = lazy(() => import("./Basic"));

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

    const [error, loading, position] = usePosition();

    if (error) {
        return <div>Cant load position</div>
    }

    if (getCurrentError) {
        return <div>Cant load weather</div>
    }

    if (loading || getCurrentPending) {
        return <Loader />;
    }

    if (!current && position) {
        getCurrentWeather(position);

        return <Loader />;
    }

    return (
        <Suspense fallback={<Loader />}>
            <Basic
                city={current.name}
                country={current.sys.country}
                weather={current.weather[0]}
            />
        </Suspense>

    )
};

export default CurrentWeather;
