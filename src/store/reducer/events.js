import * as actionTypes from '../actions/actionTypes';

const initialState = {
    events: []
}

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        default: return state
    }
}