import React from "react";

import styles from "./Icon.module.scss";

const Icon = (props) => {
    const src = `//openweathermap.org/img/w/${props.icon}.png`;

    return (
        <img
            className={styles.icon}
            src={src}
            alt={props.alt || 'Weather icon'}
            width={props.width || 50}
            height={props.height || 50}
        />
    );
};

export default Icon;