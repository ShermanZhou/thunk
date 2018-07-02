// ./actions/index.js
//the combo actions that has both async ajax and counter.
export const fetchAjax = url => dispatch => {
    dispatch({
        type: 'REQUEST_AJAX',
        url
    });
    //async with delay, request, set state back.
    window.setTimeout(()=>{
        return fetch(url)
        .then(response => response.json())
        .then(json=>{
            const action = {
                type: 'RECEIVE_AJAX',
                url,
                data:json.data,
                receivedAt: Date.now()
            }
            dispatch(action);
            dispatch({ type: 'INCREASE' });
        });
    },3000);
};