import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {getWeatherForecast} from "../../Containers/Weather/Weather.action";
import useRedux from "../../Hooks/redux";
import Loader from "../Loader/Loader";
import Entry from "./Entry";

import styles from "./Forecast.module.scss";

const mapStateToProps = store => ({
    forecast: store.weather.forecast,
    getForecastPending: store.weather.getForecastPending,
    getForecastError: store.weather.getForecastError,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getWeatherForecast
}, dispatch);

const Forecast = () => {
    const {
        forecast,
        getForecastPending,
        getForecastError,
        getWeatherForecast
    } = useRedux(mapStateToProps, mapDispatchToProps);

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
            {
                forecast.list.map((part, index) => (
                    <Entry
                        key={index}
                        time={part.dt}
                        temp={part.main.temp}
                        pressure={part.main.pressure}
                        humidity={part.main.humidity}
                        weather={part.weather}
                    />)
                )
            }
        </div>
    )
};

export default Forecast;