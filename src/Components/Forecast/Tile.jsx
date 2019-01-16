import React from 'react';

import styles from './Entry.module.scss';
import Description from "../CurrentWeather/Description";
import Icon from "../Icon/Icon";

const Tile = (props) => {
    const {
        datetime,
        temp,
        pressure,
        humidity,
        weather,
    } = props;

    const dateObj = (new Date(datetime * 1000));
    const date = dateObj.toLocaleTimeString();
    const time = dateObj.toLocaleDateString();

    return (
        <div className={styles.entry}>
            <div className={styles.entry__time}>
                <span>{date}</span> <span>{time}</span>
            </div>
            <div className={styles.entry__basic}>
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