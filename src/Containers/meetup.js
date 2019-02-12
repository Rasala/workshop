function fetchUser(id) {
    return dispatch => {
        dispatch({ type: 'FETCH_USER' });
        fetch('...').then(user => {
            dispatch({ type: 'FETCHED_USER' });
        }, error => {
            dispatch({ type: 'ERRORED_USER' });
        });
    };
}