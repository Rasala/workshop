import React from 'react';

import styles from './Header.module.scss';
import {Cmp1, Cmp2, Cmp11, Cmp22} from "./Extra";

const Header = () => (
    <header className={styles.basic}>
        <Cmp1 />
        <Cmp2 />
    </header>
);

export default Header;