import React, { useState } from 'react';
import Header from './Components/Header/Header';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import { Provider } from 'react-redux';
import { store } from "./Store/store";
import Forecast from "./Components/Forecast/Forecast";
import CurrentUV, { CurrentUVF } from "./Components/CurrentUV/CurrentUV";

import styles from './App.module.scss';

export const ColorContext = React.createContext();

const App = () => {
    const [color, setColor] = useState('red');

    return (
        <Provider store={store}>
            <ColorContext.Provider value={{color, setColor}}>
                <div className={styles.app}>
                    <div className={styles.app__header}>
                        <Header />
                    </div>
                    <div className={styles.app__aside}>
                        <CurrentWeather />
                        <CurrentUV />
                    </div>
                    <div className={styles.app__content}>
                        <Forecast />
                    </div>
                </div>
            </ColorContext.Provider>
        </Provider>
    )
};

export default App;
