import actionTypes from '../actionTypes/hotel';
import update from 'immutability-helper';

const initialState = {
    formRate: {
        hotelId: '',
        checkIn: '',
        numNights: '',
    },
    lowestRate: false,
    rates: [],
    rateResponse: false,
    loadingRate: false,
};

const stop = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FORM_RATE:
            return update(state, { formRate: { [action.payload.key]: { $set: action.payload.value } } });
        case actionTypes.FETCH_LOWEST_RATE:
            return update(state, { lowestRate: { $set: action.payload.data } });
        case actionTypes.FETCH_RATES:
            return update(state, { rates: { $set: action.payload.data } });
        case actionTypes.FETCH_RATE_RESPONSE:
            return update(state, { rateResponse: { $set: action.payload.value } });
        case actionTypes.LOADING_RATE:
            return update(state, { loadingRate: { $set: action.payload.status } });
        default:
            return state;
    }
};

export default stop;