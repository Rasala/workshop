import React, {lazy, useEffect, Suspense} from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {getWeatherForecast} from "../../Containers/Weather/Weather.action";
import useRedux from "../../Hooks/redux";
import Loader from "../Loader/Loader";

import styles from "./Forecast.module.scss";

const Tile = lazy(() => import('./Tile'));

const mapStateToProps = store => ({
    forecast: store.weather.forecast,
    getForecastPending: store.weather.getForecastPending,
    getForecastError: store.weather.getForecastError,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getWeatherForecast
}, dispatch);

const Forecast = (props) => {
    const {
        forecast,
        getForecastPending,
        getForecastError,
        getWeatherForecast
    } = props;

    useEffect(() => {
        if(!forecast && !getForecastError){
            navigator.geolocation.getCurrentPosition(position =>
                getWeatherForecast({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }));
        }
    }, [forecast, getForecastError]);

    if (getForecastPending) {
        return <Loader />;
    }

    return (
        <div className={styles.forecast}>
            <h2>Forecast</h2>
            <div className={styles.forecast__tiles}>
                <Suspense fallback={<Loader />}>
                    {
                        forecast.list.map((part, index) => (
                            <Tile
                                key={index}
                                datetime={part.dt}
                                temp={part.main.temp}
                                pressure={part.main.pressure}
                                humidity={part.main.humidity}
                                weather={part.weather[0]}
                            />)
                        )
                    }
                </Suspense>
            </div>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);