import React from "react";
import Icon from "../Icon/Icon";
import Description from "./Description";

import styles from "./Header.module.scss";

const Header = (props) => (
    <div className={styles.header}>
        <h1>Weather in {props.city}, {props.country}</h1>
        <Icon icon={props.weather.icon} />
        <Description description={props.weather.description}/>
    </div>
);

export default Header;