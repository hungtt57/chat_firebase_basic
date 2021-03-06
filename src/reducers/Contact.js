import {
    FETCH_CONTACT_ERROR,
    FETCH_CONTACT_SUCCESS,
    FETCH_MESSAGE_SUCCESS,
    FECTH_MESSAGE_ERROR
} from '../actions/types';

const INITIAL = {
    loading : true,
    contacts : [],
};
export default (state = INITIAL ,action) => {
    switch (action.type) {
        case FETCH_CONTACT_SUCCESS :
            return {...INITIAL , loading:false,contacts : action.contacts};
        case FETCH_CONTACT_ERROR :
            return {...INITIAL , loading:false};
        default:
            return state;
    }
}