import { api } from '../api/';
import actionTypes from '../actionTypes/hotel';
import Constants from '../constants/'

const actions = {
    getAvailableRate: () => {
        return (dispatch, store) => {
            dispatch(actions.loadingRate(true));
            const { hotelId, checkIn, numNights } = store().hotel.formRate
            const resultCheckIn = actions.validateParams("checkIn", checkIn)
            const resultNumNights = actions.validateParams("numNights", numNights)
            if (hotelId < 0 || hotelId === '') {
                dispatch(actions.fetchRateResponse(Constants.INCORRECT_HOTEL_ID));
            } else if (resultCheckIn === -1) {
                dispatch(actions.fetchRateResponse(Constants.INCORRECT_CHECKIN_DATE));
            } else if (resultNumNights === -2) {
                dispatch(actions.fetchRateResponse(Constants.INCORRECT_NUMBER_NIGHTS));
            } else {
                api.getAvailableRate(hotelId, checkIn, numNights).then(response => {
                    if (response.hasOwnProperty("availableRates")) {
                        if (response.availableRates[hotelId] !== '') {
                            dispatch(actions.fetchLowestRate(response.availableRates[hotelId][0]));
                            dispatch(actions.fetchRates(response.availableRates[hotelId]));
                            dispatch(actions.fetchRateResponse(true));
                        } else {
                            dispatch(actions.fetchRateResponse(Constants.NO_AVAILABLE_RATES));
                        }
                    } else {
                        console.log("error: " + response.message)
                        dispatch(actions.fetchRateResponse(Constants.NO_AVAILABLE_RATES));
                    }
                    dispatch(actions.loadingRate(false));
                }, reason => {
                    if (reason.message === 400) {
                        // !Rate
                        console.log(reason.message)
                    } else {
                        //TODO: Falló otra cosa
                        console.log(reason.message)
                    }
                    dispatch(actions.fetchRateResponse(false));
                    dispatch(actions.loadingRate(false));
                });
            }
        }
    },
    validateParams: (key, value) => {
        switch (key) {
            case 'checkIn':
                let actualDate = new Date()
                actualDate = actualDate.toLocaleDateString('en-GB')
                if (Date.parse(value) < Date.parse(actualDate)) {
                    return -1
                } else {
                    return value
                }
            case 'numNights':
                if (value < 0 || value > 30) {
                    return -2
                } else {
                    return value
                }
        }

    },
    setFormRate: (key, value) => {
        if (key === 'checkIn') {
            var fecha = new Date(value);
            value = fecha.toLocaleDateString('en-GB')
        }
        return {
            type: actionTypes.SET_FORM_RATE,
            payload: {
                key,
                value
            }
        };
    },
    fetchLowestRate: (data) => ({
        type: actionTypes.FETCH_LOWEST_RATE,
        payload: {
            data
        }
    }),
    fetchRates: (data) => ({
        type: actionTypes.FETCH_RATES,
        payload: {
            data
        }
    }),
    fetchRateResponse: (value) => ({
        type: actionTypes.FETCH_RATE_RESPONSE,
        payload: {
            value
        }
    }),
    loadingRate: (status) => ({
        type: actionTypes.LOADING_RATE,
        payload: {
            status
        }
    }),

};

export default actions;