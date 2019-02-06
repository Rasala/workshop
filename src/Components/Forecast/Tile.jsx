import React from 'react';

import styles from './Tile.module.scss';
import Description from "../CurrentWeather/Description";
import Icon from "../Icon/Icon";

const DateTime = (props) => {
    const {
        datetime
    } = props;

    const dateObj = (new Date(datetime * 1000));
    const date = dateObj.toLocaleTimeString();
    const time = dateObj.toLocaleDateString();

    return (
        <span>{date} {time}</span>
    )
};

const Tile = (props) => {
    const {
        datetime,
        temp,
        pressure,
        humidity,
        weather,
    } = props;

    return (
        <div className={styles.tile}>
            <div className={styles.tile__time}>
                <DateTime datetime={datetime} />
            </div>
            <div className={styles.tile__basic}>
                <Icon icon={weather.icon} />
                <Description description={weather.description}/>
            </div>
            <div>Temp {Math.round(temp - 273.15)}&deg;C</div>
            <div>Pressure {pressure}hPa</div>
            <div>Humidity {humidity}%</div>
        </div>
    )
};

export default Tile;