import React, {useContext, useEffect, Suspense} from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {getWeatherForecast} from "../../Containers/Weather/Weather.action";
import Loader from "../Loader/Loader";

import styles from "./Forecast.module.scss";
import {ColorContext} from "../../App";
import { Tiles } from "./Tiles";
import {getRandomColor} from "../../Helpers/color.helper";

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
        if(!forecast && !getForecastError) {
            getWeatherForecast({latitude: 54.207139, longitude: 16.0769203})
        }
    }, [forecast, getForecastError]);

    if (getForecastPending) {
        return <Loader />;
    }

    return (
        <ColorContext.Consumer>
            {({color, setColor}) => (
                <div className={styles.forecast}>
                    <h2 style={{backgroundColor: color}} onClick={() => {
                        setColor(getRandomColor())
                    }}>Forecast</h2>
                    <div className={styles['forecast__tiles']}>
                        <Suspense fallback={<Loader/>}>
                            <Tiles list={forecast.list}/>
                        </Suspense>
                    </div>
                </div>
            )}
        </ColorContext.Consumer>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
