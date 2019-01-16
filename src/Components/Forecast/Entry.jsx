import React from 'react';

import styles from './Entry.module.scss';

const Entry = (props) => {
    const {time, temp, pressure, humidity,} = props;

    return (
        <div className={styles.entry}>
            <div>{(new Date(time)).toDateString()}</div>
            <div>Temp {Math.round(temp - 273.15)}&deg;C</div>
            <div>Pressure {pressure}hPa</div>
            <div>Humidity {humidity}%</div>
        </div>
    )
};

export default Entry;