import React from "react";

import styles from './Description.module.scss';

const Description = (props) => (
    <span className={styles.description}>{props.description}</span>
);

export default Description;