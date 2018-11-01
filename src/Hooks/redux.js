import { useState, useEffect } from 'react';
import {store } from '../Store/store';

const emptyFunction = () => ({});

const shallowCompare = (obj1, obj2) =>
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every(key => obj1[key] === obj2[key]);

export default function useRedux(mapStateToProps = emptyFunction, mapDispatchToProps = emptyFunction) {
    const stateToProps = mapStateToProps(store.getState());
    const dispatchToProps = mapDispatchToProps(store.dispatch);

    const [state, setState] = useState(stateToProps);

    useEffect(() => store.subscribe(() => {
        console.log(`Running subscribe`);

        const newStateToProps = mapStateToProps(store.getState());

        console.log('newStateToProps', newStateToProps);
        console.log('stateToProps', stateToProps);

        if (!shallowCompare(newStateToProps, stateToProps)) {
            console.log('setState');

            setState(newStateToProps);
        }
    }));

    return {
        ...state,
        ...dispatchToProps
    }
}