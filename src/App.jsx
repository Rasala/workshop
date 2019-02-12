import React from 'react';
import Header from './Components/Header/Header';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import { Provider } from 'react-redux';
import { store } from "./Store/store";
import Forecast from "./Components/Forecast/Forecast";

import styles from './App.module.scss';

const App = () => (
    <Provider store={store}>
        <div className={styles.app}>
            <div className={styles.app__header}>
                <Header />
            </div>
            {/*<div className={styles.app__aside}>*/}
                {/*<CurrentWeather />*/}
            {/*</div>*/}
            {/*<div className={styles.app__content}>*/}
                {/*<Forecast />*/}
            {/*</div>*/}
        </div>
    </Provider>

);

export default App;
