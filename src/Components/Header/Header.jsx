import React, { useEffect, useReducer, useRef, useState } from 'react';

import styles from './Header.module.scss';

const Header = () => {
    //                                                                                                          const [{value, disabled, actionsDisabled}, dispatch] = useReducer(reducer, {value: 0, disabled: true, actionsDisabled: false});

    // const [value, setValue] = useState(0);
    // const [disabled, setDisabled] = useState(true);
    // const [actionsDisabled, setActionsDisabled] = useState(false);
    const inputRef = useRef();

    function increment() {
        //                                                                                                      dispatch({type: 'INCREMENT'});
        // setValue(value+1);
    }

    function decrement() {
        //                                                                                                      dispatch({type: 'DECREMENT'});
        //setValue(value-1);
    }

    function enableInput() {
        //                                                                                                      dispatch({type: 'ENABLE_INPUT'});
        // setDisabled(false);
        // setActionsDisabled(true);

        // inputRef.current.focus();
        // inputRef.current.value = '';
        // inputRef.current.value = value;
    }

    function disableInput() {
        //                                                                                                      dispatch({type: 'DISABLE_INPUT'});
        // setActionsDisabled(false);
    }

    function valueChange(e) {
        const { value } = e.target;
        const numberValue = Number(value);

        if (Number.isNaN(numberValue)) { return false; }

        //                                                                                                      dispatch({type: 'SET_VALUE', payload: numberValue});
        // setValue(numberValue);
    }

    return (
        <header className={styles.basic}>
            {/*<button onClick={decrement} disabled={actionsDisabled}>-</button>*/}
            {/*<input ref={inputRef} disabled={disabled} value={value} onChange={valueChange} />*/}
            {/*<button onClick={increment} disabled={actionsDisabled}>+</button>*/}
            {/*&nbsp;*/}
            {/*<button onClick={enableInput}>Enable input</button>*/}
            {/*<button onClick={disableInput}>Disable input</button>*/}
        </header>
    )
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                value: action.payload
            }
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            };
        case 'DISABLE_ACTIONS':
            return {
                ...state,
                actionsDisabled: true
            }
        case 'ENABLE_ACTIONS':
            return {
                ...state,
                actionsDisabled: false
            }
        case 'DISABLE_INPUT':
            return {
                ...state,
                disabled: true,
                actionsDisabled: false,
            }
        case 'ENABLE_INPUT':
            return {
                ...state,
                disabled: false,
                actionsDisabled: true
            }
        default:
            return state;
    }
}

export default Header;
