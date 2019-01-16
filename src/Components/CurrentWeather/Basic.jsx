import React from "react";
import Icon from "../Icon/Icon";
import Description from "./Description";

import styles from "./Basic.scss";

const Basic = (props) => (
    <div className={styles.basic}>
        <h1>Weather in {props.city}, {props.country}</h1>
        <Icon icon={props.weather.icon} />
        <Description description={props.weather.description}/>
    </div>
);

export default Basic;