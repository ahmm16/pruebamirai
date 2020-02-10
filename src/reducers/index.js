import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import hotel from './hotel';

export default (history) => combineReducers({
    router: connectRouter(history),
    hotel,
});
