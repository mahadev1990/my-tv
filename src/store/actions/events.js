import * as actionTypes from './actionTypes';
import { EventDetails } from './data';
export const fetchEvents = () => {
    return dispatch => {
        fetch('https://web.ion.dev.otvse.com/mockdata/events.json')
            .then(response => {
                response.json().then(data => {
                    dispatch({
                        type: actionTypes.FETCH_EVENTS,
                        payload: data
                    })
                });
            }
            )
            .catch(function (err) {
                dispatch({
                    type: actionTypes.FETCH_EVENTS,
                    payload: EventDetails
                })
            });
    };
};